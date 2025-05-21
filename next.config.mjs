/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure for GitHub Pages - adjust the basePath if you're deploying to a custom domain
  // or if your repo is not at the root of your GitHub Pages site
  basePath: process.env.NODE_ENV === 'production' ? '/Doctors-Site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Doctors-Site/' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
