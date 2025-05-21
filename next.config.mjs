/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure for GitHub Pages - adjust the basePath if you're deploying to a custom domain
  // or if your repo is not at the root of your GitHub Pages site
  basePath: process.env.NODE_ENV === 'production' ? '/tailwind-landing' : '',
  images: {
    unoptimized: true, // Required for static export
  },
  // Note: appDir is now default in Next.js 15+
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
