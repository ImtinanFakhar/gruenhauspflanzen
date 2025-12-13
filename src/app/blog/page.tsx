import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, formatDate } from '@/lib/posts';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Entdecken Sie nützliche Tipps und Inspiration rund um Zimmerpflanzen, Gartenpflege und nachhaltiges Wohnen. Hier finden Sie spannende Beiträge, die Ihnen helfen, Ihre Pflanzen gesund und Ihr Zuhause grün zu gestalten.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            {/* Hero Section */}
            <section className="hero py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="badge mb-4">📝 Blog</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-600">
                            Entdecken Sie nützliche Tipps und Inspiration rund um Zimmerpflanzen,
                            Gartenpflege und nachhaltiges Wohnen. Hier finden Sie spannende Beiträge,
                            die Ihnen helfen, Ihre Pflanzen gesund und Ihr Zuhause grün zu gestalten.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section bg-white">
                <div className="container">
                    {posts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/${post.slug}/`}
                                    className="card group"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {post.category && (
                                            <span className="absolute top-4 left-4 badge">
                                                {post.category}
                                            </span>
                                        )}
                                    </div>
                                    <div className="card-content">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                            <span>{post.author}</span>
                                            <span>•</span>
                                            <time>{formatDate(post.date)}</time>
                                            {post.readingTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.readingTime}</span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className="font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {post.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                                            Weiterlesen
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold mb-4">Bald mehr Artikel!</h2>
                            <p className="text-gray-600 max-w-md mx-auto mb-8">
                                Wir arbeiten an neuen Inhalten für dich. Schau bald wieder vorbei
                                oder abonniere unseren Newsletter, um benachrichtigt zu werden!
                            </p>
                            <Link href="/" className="btn btn-primary">
                                Zurück zur Startseite
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
