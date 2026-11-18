# 🏗️ ARCHITECTURE.md

This document details the technical architecture of **CODEDEX**, a purely static developer reference platform.

## 🏛️ High-Level Architecture

CODEDEX follows a **Static Site Generation (SSG)** pattern. All content is transformed from Markdown to HTML at build time, ensuring zero runtime overhead and maximum security.

### 1. Content Pipeline
`Markdown (src/content/cheatsheets/)` $\rightarrow$ `Zod Validation` $\rightarrow$ `Astro Component` $\rightarrow$ `Static HTML (dist/)`

- **Zod Validation**: Every cheatsheet must adhere to a strict schema defined in `src/content/config.ts`. This prevents broken links or missing metadata during the build.
- **Dynamic Routing**: Astro's `[...slug].astro` generates unique static paths for every markdown file based on its category and slug.

### 2. Search Strategy (Pagefind)
Because the site is static, traditional database searches are impossible. CODEDEX uses **Pagefind**, which operates in two phases:
- **Build-time**: `pagefind --source dist` crawls the generated HTML and creates a highly compressed, chunked search index.
- **Runtime**: The `SearchDialog.astro` component asynchronously fetches only the required index chunks from the server as the user types, providing instant results without a backend.

### 3. State Management (Client-Side)
To maintain a "dynamic" feel without a database, CODEDEX leverages the browser's `localStorage`:
- **Bookmarks**: Stored as an array of objects (`codedex-bookmarks`).
- **Recently Viewed**: A timestamped list of visited slugs (`codedex-recently-viewed`).
- **Theme**: A simple string `light` or `dark` (`codedex-theme`).

### 4. Theming & FOUC Prevention
To prevent the "Flash of Unstyled Content" (FOUC), the theme check is performed by a blocking inline script in the `<head>` of `BaseLayout.astro`. This ensures the correct CSS variables are applied *before* the first paint.

## 📂 Directory Structure
- `src/content/`: The "database" of the site. Contains all Markdown files.
- `src/layouts/`: Structural shells (Base and Documentation).
- `src/components/`: Atomic UI elements (Header, Sidebar, Search, etc.).
- `src/pages/`: Route definitions mapping to the final URL structure.
- `src/styles/`: Design tokens and global CSS.
- `dist/`: The final production output deployed to GitHub Pages.

## 🛡️ Security Model
- **Attack Surface**: Minimal. No server-side code means no SQL injection, no RCE, and no authentication bypasses.
- **Content Integrity**: Controlled via Git. Changes are reviewed via PRs.
- **Dependencies**: Minimized to build-time tools (Astro) and a few lightweight client-side libraries (Lucide).
