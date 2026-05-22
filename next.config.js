/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Replace deprecated `domains` with `remotePatterns`
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // The `eslint` key is no longer supported. Remove it.
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig