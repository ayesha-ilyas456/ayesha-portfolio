# Ayesha Ilyas Portfolio

React 18, Vite 5 and Tailwind CSS 3. All content lives in `src/data/content.js` (sourced only from the CV).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

Node 18 or newer.

## Deploy

- **Vercel:** import the repo or run `npx vercel`. `vercel.json` rewrites every route to `index.html`.
- **Netlify:** import the repo or drag `dist/`. `netlify.toml` sets the build command, publish folder and the same fallback.

## Routes

`/` Index, `/projects` all work, `/projects/:slug` project detail, `/about`, `/contact`.

## Editing

- Copy, projects, experience, skills: `src/data/content.js`
- Project screenshots: add `image: '/projects/medcare.png'` to a project and place the file in `public/projects/`. The placeholder is replaced automatically.
- Portrait: set `photo: '/ayesha.jpg'` in `content.js` and put the file in `public/`.
- Colors (light and dark): CSS variables at the top of `src/index.css`.
- Font: Ubuntu (300 for headlines, 400 for labels), via the Google Fonts link in `index.html` and `tailwind.config.js`.
- Theme: dark by default, with a toggle in the header. A visitor's saved choice wins. To make light the default, change `'dark'` to `'light'` in the inline script in `index.html`.
- Cursor ring and scroll progress line: `src/components/Cursor.jsx` and `src/components/ScrollProgress.jsx`. Remove them from `src/App.jsx` to turn them off.
