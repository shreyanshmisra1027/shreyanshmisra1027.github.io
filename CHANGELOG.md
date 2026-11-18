# 📜 CHANGELOG.md

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-11-18
### Added
- **Core Framework**: Implemented Astro SSG for high-performance static hosting.
- **Search**: Integrated Pagefind for instant, client-side full-text search.
- **Content**: Added 41 comprehensive technical cheatsheets across 6 domains (Programming, DSA, Tools, DBs, CS, Cybersecurity).
- **Features**: 
  - Client-side Bookmarks system via `localStorage`.
  - "Recently Viewed" browsing history.
  - Dual-theme (Light/Dark) system with FOUC prevention.
  - Dynamic Table of Contents with scroll tracking.
  - Zod-validated content collections for type-safe frontmatter.
- **Design**: Implemented a high-density, monochromatic design system focused on readability.
- **Infrastructure**: GitHub Actions workflow for automated deployment to GitHub Pages.

### Fixed
- Resolved Vite resolution errors related to `BookmarkButton.astro`.
- Fixed sitemap generation failure by updating `@astrojs/sitemap` configuration.

### Changed
- Complete repository purge of legacy portfolio and 3D showcase files to dedicate the repo exclusively to CODEDEX.
