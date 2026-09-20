# Deployment Instructions

## Preparation
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Ensure your latest `resume.pdf` is at `src/assets/resume.pdf`. Both Download Resume buttons link to it.
3.  Add your profile photo at `src/assets/profile.jpg` (or `.png` / `.webp`). Without it the hero falls back to an **NM** monogram.
4.  Run `npm run build` once locally to confirm the build is clean.

## Contact form (Netlify Forms)

The contact form posts to **Netlify Forms** - no API key, no third-party account,
nothing secret in the bundle. It only works on a Netlify deploy; running locally
or on another host, the POST fails and the form falls back to an "Open in email
app" button so nobody gets stuck.

After your first deploy:

1. Netlify detects the hidden `contact` form in `index.html` at build time.
2. Open **Site configuration > Forms** in the Netlify dashboard - submissions
   appear there.
3. Under **Form notifications**, add an email notification to
   `narayanan.muralidhar2604@gmail.com` so new messages reach your inbox.

Free tier covers 100 submissions a month. A hidden honeypot field blocks most bots.

If you ever move off Netlify, swap the `fetch("/")` call in
`src/components/Contact.jsx` for another form service (Web3Forms, Formspree) -
the rest of the form stays as is.

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
