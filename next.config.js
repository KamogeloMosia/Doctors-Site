/** @type {import('next').NextConfig} */
const repo = 'Doctors-Site'
const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // Remove once GitHub Pages supports HTTPS custom domains
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
} else if (process.env.NODE_ENV === 'production') {
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
}

module.exports = nextConfig
