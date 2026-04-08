/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@spark/content', '@spark/registry', '@spark/ui'],
};

export default nextConfig;
