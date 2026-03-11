/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allow production builds with type errors for now
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow production builds with ESLint errors for now
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig