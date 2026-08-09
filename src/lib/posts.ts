import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    author: string;
    description: string;
    image: string;
    category?: string;
    readingTime?: string;
    seoTitle?: string;
    modifiedDate?: string;
    imageAlt?: string;
    excerpt?: string;
    relatedSlugs?: string[];
    showToc?: boolean;
}

export interface Post extends PostMeta {
    content: string;
}

// Ensure the posts directory exists
function ensurePostsDirectory() {
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true });
    }
}

const REDIRECTED_SLUGS = ['zimmerpflanzen-wenig-licht'];

// Get all post slugs for static generation
export function getPostSlugs(): string[] {
    ensurePostsDirectory();
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        return fileNames
            .filter((name) => name.endsWith('.md') || name.endsWith('.mdx'))
            .map((name) => name.replace(/\.mdx?$/, ''))
            .filter((slug) => !REDIRECTED_SLUGS.includes(slug));
    } catch {
        return [];
    }
}

export function getPublishableSlugs(): string[] {
    return getPostSlugs();
}

// Get a single post by slug
export function getPostBySlug(slug: string): Post | null {
    ensurePostsDirectory();

    const mdPath = path.join(postsDirectory, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

    let fullPath = '';
    if (fs.existsSync(mdPath)) {
        fullPath = mdPath;
    } else if (fs.existsSync(mdxPath)) {
        fullPath = mdxPath;
    } else {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Calculate reading time (roughly 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Grüne Hauspflanzen Redaktion',
        description: data.description || '',
        image: data.image || '/images/default-post.jpg',
        category: data.category,
        readingTime: `${readingTime} min Lesezeit`,
        seoTitle: data.seoTitle,
        modifiedDate: data.modifiedDate,
        imageAlt: data.imageAlt,
        excerpt: data.excerpt,
        relatedSlugs: data.relatedSlugs,
        showToc: data.showToc !== undefined ? data.showToc : true,
        content,
    };
}

// Get all posts sorted by date
export function getAllPosts(): PostMeta[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is Post => post !== null)
        .map(({ content, ...meta }) => meta) // Remove content for list views
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

// Get recent posts (for sidebar, homepage, etc.)
export function getRecentPosts(count: number = 3): PostMeta[] {
    return getAllPosts().slice(0, count);
}

// Get posts by category
export function getPostsByCategory(category: string): PostMeta[] {
    return getAllPosts().filter(
        (post) => post.category?.toLowerCase() === category.toLowerCase()
    );
}

// Get all unique categories
export function getAllCategories(): string[] {
    const posts = getAllPosts();
    const categories = new Set<string>();

    posts.forEach((post) => {
        if (post.category) {
            categories.add(post.category);
        }
    });

    return Array.from(categories);
}

// Format date for display
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

// Get related posts
export function getRelatedPosts(currentSlug: string, relatedSlugs?: string[], category?: string, count: number = 3): PostMeta[] {
    const allPosts = getAllPosts();
    const related: PostMeta[] = [];
    const addedSlugs = new Set<string>();
    addedSlugs.add(currentSlug);

    if (relatedSlugs && relatedSlugs.length > 0) {
        for (const slug of relatedSlugs) {
            if (related.length >= count) break;
            if (!addedSlugs.has(slug)) {
                const post = allPosts.find(p => p.slug === slug);
                if (post) {
                    related.push(post);
                    addedSlugs.add(slug);
                }
            }
        }
    }

    if (related.length < count && category) {
        const categoryPosts = getPostsByCategory(category);
        for (const post of categoryPosts) {
            if (related.length >= count) break;
            if (!addedSlugs.has(post.slug)) {
                related.push(post);
                addedSlugs.add(post.slug);
            }
        }
    }

    return related;
}
