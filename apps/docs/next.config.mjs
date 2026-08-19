/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@spark/content', '@spark/registry', '@spark/ui'],
  async redirects() {
    return [
      {
        source: '/docs/components',
        destination: '/components',
        permanent: true,
      },
      {
        source: '/docs/components/:slug',
        destination: '/components/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
