# Doctors Site

A modern website for doctors and healthcare professionals built with Next.js.

## Features

- Responsive design
- Static site export for easy deployment
- Optimized for performance

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This site is configured for deployment on GitHub Pages. The base path is set to `/Doctors-Site` in production.

### Setup for GitHub Pages

1. Create a new repository named `Doctors-Site` on GitHub
2. Update the `homepage` and `repository` fields in package.json with your GitHub username
3. Push your code to the repository

### Automatic Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Select "GitHub Actions" as the source
4. The website will be available at: https://yourusername.github.io/Doctors-Site

### Manual Deployment

You can also deploy the site manually:

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

2. Build and deploy:
   ```bash
   npm run deploy
   ```

This will build the site and deploy it to the `gh-pages` branch, which GitHub Pages will serve.

### Custom Domain (Optional)

To use a custom domain:
1. Update the CNAME file in the public directory with your domain
2. Configure your DNS settings as described in GitHub Pages documentation

## Technologies Used

- Next.js
- React
- Tailwind CSS
