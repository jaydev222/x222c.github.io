# Creative Agency MVP

This is a Next.js project for a creative agency website, set up for local development and deployment to GitHub Pages.

## Local Development

To run the project locally:

1. Clone the repository:
git clone [https://github.com/yourusername/creative-agency-mvp.git](https://github.com/yourusername/creative-agency-mvp.git)
cd creative-agency-mvp

2. Install dependencies:

npm install

3. Run the development server:

npm run dev


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

This project is set up for automatic deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch will trigger a new build and deployment.

To set up GitHub Pages:

1. Go to your repository settings on GitHub.
2. Navigate to the "Pages" section.
3. Under "Source", select "gh-pages" branch.
4. Click "Save".

After setting this up, your site will be available at `https://yourusername.github.io/creative-agency-mvp/`.

## Manual Deployment

If you want to deploy manually:

1. Build and export the project:
```

npm run export

```plaintext

2. The static files will be generated in the `out` directory. You can deploy these files to any static hosting service.

## Customization

Remember to update the `assetPrefix` and `basePath` in `next.config.js` if you're deploying to a different location than `/creative-agency-mvp/`.
```