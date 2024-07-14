/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;
