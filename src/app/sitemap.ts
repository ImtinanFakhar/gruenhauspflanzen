import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://gruenhauspflanzen.de';

    // Static pages - omit lastModified when no reliable date exists
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/blog/`,
        },
        {
            url: `${baseUrl}/uber-uns/`,
        },
        {
            url: `${baseUrl}/kontakt/`,
        },
        {
            url: `${baseUrl}/datenschutz/`,
        },
        {
            url: `${baseUrl}/impressum/`,
        },
    ];

    // Blog posts - use actual dates from frontmatter
    const posts = getAllPosts();
    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/${post.slug}/`,
        lastModified: post.modifiedDate
            ? new Date(post.modifiedDate)
            : new Date(post.date),
    }));

    return [...staticPages, ...blogPages];
}
