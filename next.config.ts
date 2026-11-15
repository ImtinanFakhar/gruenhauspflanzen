import type { NextConfig } from "next";

const isPagesExport = process.env.CF_PAGES_EXPORT === '1';

const nextConfig: NextConfig = {
  reactCompiler: true,
  ...(isPagesExport ? { output: 'export' as const } : {}),

  // Enable trailing slashes to match WordPress URL structure
  trailingSlash: true,

  // Configure external images (Unsplash, Wikipedia)
  images: {
    unoptimized: isPagesExport,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Permanent redirects for URL consolidation
  redirects: isPagesExport ? undefined : async () => {
    return [
      {
        source: '/zimmerpflanzen-wenig-licht',
        destination: '/zimmerpflanzen-fur-schwach-beleuchtete/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
