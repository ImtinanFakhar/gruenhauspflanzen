import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Enable trailing slashes to match WordPress URL structure
  trailingSlash: true,

  // Configure external images (Unsplash, Wikipedia)
  images: {
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
  async redirects() {
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
