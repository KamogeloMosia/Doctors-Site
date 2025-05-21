# Tailwind Landing Page

A modern, responsive landing page built with Next.js, Tailwind CSS, and a customizable theme system.

## Features

- Responsive design for all device sizes
- Dark/light mode toggle
- Multiple theme options with customizable colors
- Sidebar navigation for desktop and bottom navigation for mobile
- Admin panel for theme customization

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/tailwind-landing.git
   cd tailwind-landing
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This repository is configured to automatically deploy to GitHub Pages when you push to the main branch.

1. Push your changes to the main branch:
   \`\`\`bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   \`\`\`

2. GitHub Actions will automatically build and deploy your site to the `gh-pages` branch.

3. Your site will be available at `https://your-username.github.io/tailwind-landing/`

### Manual Deployment

If you prefer to deploy manually:

1. Update the `GITHUB_USERNAME` and `REPO_NAME` variables in `scripts/deploy.js`

2. Run the deploy script:
   \`\`\`bash
   npm run deploy
   \`\`\`

3. Your site will be available at `https://your-username.github.io/tailwind-landing/`

## Customization

### Themes

The site includes multiple built-in themes that can be selected from the theme selector. You can also customize the colors in the admin panel.

To access the admin panel, go to `/admin` and use the password `admin123`.

### Adding New Pages

1. Create a new file in the `app` directory, e.g., `app/new-page.tsx`
2. Add the page to the navigation in `components/side-navbar.tsx` and `components/bottom-navbar.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
\`\`\`

Let's also create a simple `.gitignore` file:

```plaintext file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
