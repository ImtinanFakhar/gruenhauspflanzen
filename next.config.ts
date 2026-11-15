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
      {
        source: '/17-zimmerpflanzen-fuer-wenig-licht',
        destination: '/zimmerpflanzen-fur-schwach-beleuchtete/',
        permanent: true,
      },
      {
        source: '/bergpalme-katze',
        destination: '/ungiftige-zimmerpflanzen-fuer-katzen/',
        permanent: true,
      },
      {
        source: '/badezimmerpflanzen',
        destination: '/badezimmer-pflanzen/',
        permanent: true,
      },
      {
        source: '/haengepflanzen-schattig',
        destination: '/haengepflanzen-wenig-licht/',
        permanent: true,
      },
      {
        source: '/hauspflanzen',
        destination: '/zimmerpflanzen/',
        permanent: true,
      },
      {
        source: '/pflanze-dunkle-raeume',
        destination: '/zimmerpflanzen-fur-schwach-beleuchtete/',
        permanent: true,
      },
      {
        source: '/gruenpflanzen-fuer-dunkle-raeume',
        destination: '/zimmerpflanzen-fur-schwach-beleuchtete/',
        permanent: true,
      },
      {
        source: '/pflanze-gross-wohnzimmer',
        destination: '/grosse-zimmerpflanzen/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
