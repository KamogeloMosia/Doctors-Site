const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

// Configuration
const GITHUB_USERNAME = "YOUR_GITHUB_USERNAME" // Replace with your GitHub username
const REPO_NAME = "tailwind-landing" // Replace with your repository name

// Build the project
console.log("Building the project...")
execSync("npm run build", { stdio: "inherit" })

// Create or ensure the out directory exists
const outDir = path.join(process.cwd(), "out")
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

// Create a .nojekyll file to bypass Jekyll processing on GitHub Pages
fs.writeFileSync(path.join(outDir, ".nojekyll"), "")

// Create a simple deployment script
console.log("Creating deployment files...")

// Create a CNAME file if you have a custom domain
// fs.writeFileSync(path.join(outDir, 'CNAME'), 'yourdomain.com');

// Initialize git in the out directory
try {
  execSync(`cd ${outDir} && git init && git add -A && git commit -m "Deploy to GitHub Pages"`, { stdio: "inherit" })

  // Push to the gh-pages branch
  const remote = `https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git`
  console.log(`Pushing to ${remote}...`)
  execSync(`cd ${outDir} && git push -f ${remote} main:gh-pages`, { stdio: "inherit" })

  console.log("Deployed successfully!")
  console.log(`Your site should be available at: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/`)
} catch (error) {
  console.error("Deployment failed:", error)
}
