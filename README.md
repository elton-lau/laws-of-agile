<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1PQwRYmyl8IXv6RAsLU3oJaxtMZf3H0IZ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deployment

### Cloudflare Pages

This project is configured for automated deployment to [Cloudflare Pages](https://pages.cloudflare.com/) via GitHub Actions.

#### Prerequisites

1. **Cloudflare Account**: You need a Cloudflare account.
2. **GitHub Repository**: Push this project to a GitHub repository.

#### Setup Secrets

To enable the CI/CD pipeline, add the following [Repository Secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions) to your GitHub repository (`Settings` > `Secrets and variables` > `Actions`):

| Secret Name | Description | How to get it |
|-------------|-------------|---------------|
| `CLOUDFLARE_ACCOUNT_ID` | Your Cloudflare Account ID | Dashboard > Workers & Pages > Overview (Right sidebar) |
| `CLOUDFLARE_API_TOKEN` | API Token with Pages permissions | Dashboard > My Profile > API Tokens > Create Token > Use "Edit Cloudflare Workers" template |

#### Manual Deployment

You can also deploy manually using Wrangler CLI:

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Pages
wrangler pages deploy dist --project-name=laws-of-agile
```

### Static Build Details

- **Output Directory**: `dist/`
- **Routing**: `public/_redirects` ensures all routes fall back to `index.html` (SPA routing)
- **Sitemap**: Generated automatically during build via `scripts/generate-sitemap.js`
