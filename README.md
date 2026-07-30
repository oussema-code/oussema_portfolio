# BeanUp — Café Artisanal

Modern landing page for BeanUp, an artisanal coffee shop based in Tunisia. Built with React, TypeScript, and Vite.

## Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **UI library:** Fluent UI React Components
- **Fonts:** Playfair Display + Montserrat (Google Fonts)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The output goes to the `dist/` directory, ready for deployment.

## Deployment

This project is designed for Cloudflare Pages:

1. Connect your GitHub repository to Cloudflare Pages.
2. Set the build command: `npm run build`
3. Set the build output directory: `dist`
4. For SPA routing, add a `_redirects` file or configure it in Cloudflare Pages settings.

## Project Structure

```
├── public/           # Static assets (favicon, video)
├── src/
│   ├── components/   # React components
│   ├── data/         # Menu data
│   ├── styles/       # Global styles
│   ├── App.tsx       # Main app
│   └── main.tsx      # Entry point
├── index.html
├── vite.config.ts
└── tsconfig*.json
```
