/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'img.sanishtech.com',
      },
      {
        protocol: 'https',
        hostname: 'adequate-red-40mmmaefbo.edgeone.app',
      },
    ],
  },
}

export default nextConfig
