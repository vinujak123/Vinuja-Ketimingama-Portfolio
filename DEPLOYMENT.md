# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Repository Name

If your repository is named something other than `portfolio-modern`, update the `next.config.ts` file:

```typescript
const repoName = "your-repo-name"; // Change this to match your GitHub repo name
```

Or set it as an environment variable in the GitHub Actions workflow.

### 3. Deploy

The GitHub Actions workflow will automatically:
- Build your Next.js app as a static site
- Deploy it to GitHub Pages
- Run on every push to the `main` branch

### 4. Access Your Site

Your site will be available at:
- `https://yourusername.github.io/your-repo-name/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build for GitHub Pages
npm run build:gh-pages

# The output will be in the /out directory
# You can then push the /out directory to the gh-pages branch
```

## Troubleshooting

### Site shows README instead of website

- Make sure GitHub Pages is set to use **GitHub Actions** (not a branch)
- Check that the workflow completed successfully
- Verify the `basePath` in `next.config.ts` matches your repository name

### Images not loading

- Ensure all images are in the `public` folder
- Check that image paths use relative paths (they should work automatically)

### 404 errors on navigation

- This is normal for static sites - GitHub Pages will serve `index.html` for all routes
- Next.js static export handles this automatically
