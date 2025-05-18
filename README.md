
# 🚀 Landing Page

A modern, responsive landing page built with [Next.js](https://nextjs.org/), styled for performance and simplicity. Powered by `pnpm` for fast package management and `nix` for reproducible builds and development environments.

## 📦 Features

- ⚡ Lightning-fast Next.js app
- 📦 `pnpm` for efficient dependency management
- ❄️ Reproducible environments with Nix
- 📱 Responsive, mobile-first design
- 🌐 SEO optimized

---

## 🧑‍💻 Development

Make sure you have [Nix](https://nixos.org/) installed.

To start the development server:

```bash
nix run
```

This will:
- Enter a Nix shell with `pnpm` and Node installed
- Run `pnpm dev` (Next.js in development mode)

Or, enter the shell manually and start dev mode:

```bash
nix develop
pnpm dev
```

## 🏗️ Build

To build the production version of the landing page:
```bash
nix build
```
The output will be in ./result. You can preview the production build using:
```
pnpm start
```
