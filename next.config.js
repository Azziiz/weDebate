/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.clerk.com', 'lh3.googleusercontent.com']

      },
      build: {
        chunkSizeWarningLimit: 3000,
      },
}

module.exports = nextConfig
