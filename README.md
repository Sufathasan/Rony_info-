# Md Mahmudul Hasan Rony | Premium Banking Portfolio

**Live Portfolio Website:** [https://sufathasan.github.io/Rony_info-/](https://sufathasan.github.io/Rony_info-/)

A modern static portfolio website for Md Mahmudul Hasan Rony, built with React, Vite, Tailwind CSS, and Framer Motion. The site is designed for a premium banking and financial services brand with a dark-light theme, Bangla/English language switching, and GitHub Pages deployment readiness.

## Features

- Premium executive portfolio layout
- Light and dark theme switcher with localStorage persistence
- English/Bangla language switcher
- Responsive navigation and mobile menu
- Strategic alliance, banking, and business development storytelling
- Experience timeline, education, skills, achievements, media coverage, and references
- Global Youth Impact Summit 2027 spotlight
- Downloadable CV in PDF format
- GitHub Pages deployment workflow

## Local development

1. Clone the repository.
2. Open the folder in your terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the local development server:

```bash
npm run dev -- --host
```

5. Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## GitHub Pages deployment

1. Create a GitHub repository.
2. Push the project to the repository’s `main` branch.
3. In GitHub, open the repository settings.
4. Go to `Pages` section.
5. Set the source to `GitHub Actions`.
6. Commit the workflow file in `.github/workflows/deploy.yml`.
7. Push to GitHub and wait for GitHub Actions to complete.
8. The site will be published at the repository Pages URL, typically:

```text
https://<username>.github.io/<repository-name>/
```

## Project structure

- `src/` — React application source
- `public/` — Static assets, favicon, CV PDF
- `.github/workflows/deploy.yml` — GitHub Actions deployment workflow

## Notes

- The application uses a configurable `VITE_BASE_PATH` for GitHub Pages.
- Images are loaded from supplied public URLs and local static assets where available.
- The PDF CV is available from the main contact and hero actions.
