import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs, getRecentPosts, getRelatedPosts, formatDate } from '@/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all posts
export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each post
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Artikel nicht gefunden',
        };
    }

    return {
        title: post.seoTitle || post.title,
        description: post.description,
        alternates: {
            canonical: `https://gruenhauspflanzen.de/${post.slug}/`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            url: `https://gruenhauspflanzen.de/${post.slug}/`,
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.imageAlt || post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    };
}

async function markdownToHtml(markdown: string): Promise<string> {
    const result = await remark()
        .use(remarkGfm)
        .use(html)
        .process(markdown);
    return result.toString();
}

// Extract FAQ items from content (looks for FAQ: section with ### questions)
function extractFAQs(content: string): Array<{ question: string; answer: string }> {
    const faqs: Array<{ question: string; answer: string }> = [];

    // Find the FAQ section
    const faqStartIndex = content.toLowerCase().indexOf('## faq');
    if (faqStartIndex === -1) return faqs;

    const faqSection = content.slice(faqStartIndex);

    // Split by ### to get individual questions
    const parts = faqSection.split('### ');

    for (let i = 1; i < parts.length; i++) {
        const part = parts[i];
        const newlineIndex = part.indexOf('\n');
        if (newlineIndex === -1) continue;

        const question = part.slice(0, newlineIndex).trim();
        let answer = part.slice(newlineIndex + 1).trim();

        // Stop at next ## section or end
        const nextSectionIndex = answer.indexOf('\n## ');
        if (nextSectionIndex !== -1) {
            answer = answer.slice(0, nextSectionIndex);
        }

        // Clean up answer
        answer = answer.replace(/\n+/g, ' ').replace(/\*\*/g, '').trim();

        if (question && answer) {
            faqs.push({ question, answer });
        }
    }

    return faqs;
}

// Generate Article and FAQ schema
// Generate Article and FAQ schema
function generateSchemas(post: any, faqs: Array<{ question: string; answer: string }>) {
    const schemas = [];

    // Article Schema
    schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.description,
        "image": post.image,
        "datePublished": post.date,
        "dateModified": post.modifiedDate || post.date,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Grüne Hauspflanzen",
            "logo": {
                "@type": "ImageObject",
                "url": "https://gruenhauspflanzen.de/images/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://gruenhauspflanzen.de/${post.slug}/`
        }
    });

    // FAQ Schema (if FAQs exist)
    if (faqs.length > 0) {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        });
    }

    // BreadcrumbList Schema
    schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://gruenhauspflanzen.de/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": post.category || "Blog",
                "item": "https://gruenhauspflanzen.de/blog/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://gruenhauspflanzen.de/${post.slug}/`
            }
        ]
    });

    return schemas;
}

function generateTocAndEnhanceHtml(html: string): { toc: Array<{id: string; text: string}>; enhancedHtml: string } {
    const headings: Array<{id: string; text: string}> = [];
    const enhancedHtml = html.replace(/<h2>(.*?)<\/h2>/g, (match, text) => {
        const id = text.toLowerCase().replace(/[^a-z0-9äöüß\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
        headings.push({ id, text });
        return `<h2 id="${id}">${text}</h2>`;
    });
    return { toc: headings, enhancedHtml };
}

export default async function PostPage({ params }: PostPageProps) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const contentHtmlRaw = await markdownToHtml(post.content);
    let { toc, enhancedHtml } = generateTocAndEnhanceHtml(contentHtmlRaw);
    const contentHtml = enhancedHtml.replace(/<table>/g, '<div class="table-wrapper"><table>').replace(/<\/table>/g, '</table></div>');
    const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug);
    const relatedPosts = getRelatedPosts(post.slug, post.relatedSlugs, post.category, 4);
    const faqs = extractFAQs(post.content);
    const schemas = generateSchemas(post, faqs);
    const showToc = post.showToc !== false;

    return (
        <>
            {/* Structured Data */}
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema),
                    }}
                />
            ))}
            <article>
                {/* Hero Section */}
                <section className="hero py-12 md:py-16">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                                <Link href="/" className="hover:text-emerald-600 transition-colors">
                                    Startseite
                                </Link>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <Link href="/blog/" className="hover:text-emerald-600 transition-colors">
                                    Blog
                                </Link>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="text-gray-900 font-medium truncate">{post.title}</span>
                            </nav>

                            {/* Post Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                {post.category && <span className="badge">{post.category}</span>}
                                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                    <span>{post.author}</span>
                                    <span>•</span>
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    {post.modifiedDate && (
                                        <>
                                            <span>•</span>
                                            <time dateTime={post.modifiedDate}>Aktualisiert am {formatDate(post.modifiedDate)}</time>
                                        </>
                                    )}
                                    {post.readingTime && (
                                        <>
                                            <span>•</span>
                                            <span>{post.readingTime}</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                                {post.title}
                            </h1>

                            {/* Description */}
                            {post.description && (
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {post.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* Featured Image */}
                <div className="container mb-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative aspect-video rounded-2xl overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <section className="pb-16">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-12">
                                {/* Main Content */}
                                <div className="lg:col-span-2 min-w-0">
                                    {showToc && toc.length >= 3 && (
                                        <details className="toc" open>
                                            <summary className="toc-title">Inhaltsverzeichnis</summary>
                                            <ol className="toc-list">
                                                {toc.map((item) => (
                                                    <li key={item.id}>
                                                        <a href={`#${item.id}`}>{item.text}</a>
                                                    </li>
                                                ))}
                                            </ol>
                                        </details>
                                    )}
                                    <div
                                        className="prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                                    />

                                    {/* Share & Navigation */}
                                    <div className="mt-12 pt-8 border-t border-gray-200">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-2">Artikel teilen</p>
                                                <div className="flex gap-2">
                                                    <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 flex items-center justify-center transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 flex items-center justify-center transition-colors">
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                                        </svg>
                                                    </button>
                                                    <button className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-emerald-100 text-gray-600 hover:text-emerald-600 flex items-center justify-center transition-colors">
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <Link
                                                href="/blog/"
                                                className="btn btn-secondary"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                                Alle Artikel
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    {relatedPosts.length > 0 && (
                                        <div className="mt-12 pt-8 border-t border-gray-200">
                                            <h2 className="text-2xl font-bold mb-6">Ähnliche Artikel</h2>
                                            <div className="grid sm:grid-cols-2 gap-6">
                                                {relatedPosts.map((relPost) => (
                                                    <Link key={relPost.slug} href={`/${relPost.slug}/`} className="card group">
                                                        <div className="relative h-32 overflow-hidden">
                                                            <Image src={relPost.image} alt={relPost.imageAlt || relPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                                        </div>
                                                        <div className="card-content">
                                                            <h3 className="font-semibold text-base group-hover:text-emerald-600 transition-colors line-clamp-2">{relPost.title}</h3>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sidebar */}
                                <aside className="lg:col-span-1">
                                    <div className="sticky top-24 space-y-8">
                                        {/* Recent Posts */}
                                        {recentPosts.length > 0 && (
                                            <div className="sidebar-card">
                                                <h3 className="sidebar-title">Aktuelle Artikel</h3>
                                                <div className="space-y-4">
                                                    {recentPosts.map((recentPost) => (
                                                        <Link
                                                            key={recentPost.slug}
                                                            href={`/${recentPost.slug}/`}
                                                            className="flex gap-3 group"
                                                        >
                                                            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                                                <Image
                                                                    src={recentPost.image}
                                                                    alt={recentPost.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-sm font-medium text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                                                    {recentPost.title}
                                                                </h4>
                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    {formatDate(recentPost.date)}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Contact CTA */}
                                        <div className="sidebar-card bg-emerald-50">
                                            <h3 className="sidebar-title">Haben Sie eine Frage?</h3>
                                            <p className="text-sm text-gray-600 mb-4">
                                                Kontaktieren Sie uns und wir helfen Ihnen gerne weiter!
                                            </p>
                                            <Link
                                                href="/kontakt/"
                                                className="btn btn-primary w-full text-sm"
                                            >
                                                Kontakt aufnehmen
                                            </Link>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </>
    );
}
