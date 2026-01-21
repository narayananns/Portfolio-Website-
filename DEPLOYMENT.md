# Deployment Instructions

## Preparation
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Ensure your `resume.pdf` is placed in the `public` folder. The current one is a placeholder. Replace it with your actual PDF.

## Vercel (Recommended)
1.  Go to [Vercel](https://vercel.com) and log in.
2.  Click **"Add New..."** > **"Project"**.
3.  Import your GitHub repository `portfolio`.
4.  Vercel will automatically detect the framework as **Vite**.
5.  Click **"Deploy"**.
6.  Your site will be live in less than a minute!

## Netlify
1.  Go to [Netlify](https://netlify.com) and log in.
2.  Click **"Add new site"** > **"Import from existing project"**.
3.  Connect to GitHub and select your repository.
4.  Netlify should detect the build settings:
    *   **Build command:** `npm run build`
    *   **Publish directory:** `dist`
5.  Click **"Deploy site"**.

## Local Development
 To run the project locally:
```bash
npm install
npm run dev
```
