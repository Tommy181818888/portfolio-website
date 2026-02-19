# Portfolio Website (monorepo-like layout)

This repository contains the site in the `app/` folder. Use the commands below from the repository root.

## Local dev (recommended)

- Install dependencies for the app:

```bash
npm run install-app
```

- Start the dev server:

```bash
npm run dev
```

Alternatively, `cd app` and run `npm install` / `npm run dev` directly.

## CI

The GitHub Actions workflow builds the `app` on push and PR. It caches `app/node_modules` to speed up runs.
