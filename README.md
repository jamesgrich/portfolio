# James Richardson — Portfolio

Personal portfolio site built with React and deployed to GitHub Pages at [jamesrichardson.dev](https://jamesrichardson.dev).

## Stack

- **React 19** + **Vite**
- **Material UI v7** — dark theme with violet/cyan palette
- **React Router v7** — client-side routing
- **EmailJS** — contact form email delivery (no backend)
- **JetBrains Mono** (headings) + **Inter** (body text)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with typewriter role animation and portrait |
| `/cv` | Interactive CV with Support / Dev filter on experience |
| `/projects` | Project cards with Pixel Display / Web App filter |
| `/contact` | Contact form — sends email via EmailJS |

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Deploys to GitHub Pages via the `gh-pages` branch:

```bash
npm run deploy
```

The `public/CNAME` file handles the custom domain. GitHub Pages must be configured to serve from the `gh-pages` branch.

## Configuration

### EmailJS
Update the three constants at the top of `src/pages/Contact.jsx`:
```js
const EMAILJS_SERVICE_ID  = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY  = 'your_public_key'
```

### Projects
Edit `src/data/projects.js` to update project cards and GitHub links.

### CV
All CV content lives in the `cv` data object at the top of `src/pages/CV.jsx` — update it directly when your experience changes.
