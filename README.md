/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig