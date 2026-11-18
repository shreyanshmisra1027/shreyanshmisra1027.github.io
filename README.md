# 📚 CODEDEX

**CODEDEX** is a professional, high-density personal developer reference platform and cheatsheet library. Designed for longevity and speed, it serves as a curated knowledge base for software engineers, security researchers, and computer science students.

## 🚀 Core Philosophy
- **Purely Static**: Built with Astro for maximum performance and zero runtime dependencies.
- **Zero-Backend**: No databases, no APIs, no authentication. Hosted entirely on GitHub Pages.
- **High Information Density**: Monochromatic design focused on readability and quick scanning.
- **Developer-First**: Integrated with Pagefind for instant client-side search and Shiki for professional syntax highlighting.

## 🛠️ Tech Stack
- **Framework**: [Astro](https://astro.build/) (SSG)
- **Language**: TypeScript
- **Content**: Markdown/MDX with Zod-validated frontmatter
- **Search**: [Pagefind](https://pagefind.app/) (Static indexing)
- **Icons**: [Lucide](https://lucide.dev/)
- **Styling**: Modern CSS (Custom Properties, CSS Grid/Flexbox)
- **Deployment**: GitHub Actions $\rightarrow$ GitHub Pages

## 📂 Content Taxonomy
The library is organized into six core domains:
- **Programming**: Language fundamentals, OOP, and standard libraries.
- **DSA**: Algorithms, Data Structures, and Big O analysis.
- **Developer Tools**: Git, Bash, Linux, and IDE productivity.
- **Databases**: SQL fundamentals, indexing, and NoSQL.
- **Computer Science**: Networking, OS, and System Architecture.
- **Cybersecurity**: Defensive auditing, OWASP, and Lab references.

## 🛠️ Local Development

### Prerequisites
- Node.js (Latest LTS)
- npm

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/shreyanshmisra1027/shreyanshmisra1027.github.io.git
cd shreyanshmisra1027.github.io

# Install dependencies
npm install
```

### Running the Site
```bash
# Start development server
npm run dev

# Build for production (including search index)
npm run build

# Preview the production build
npm run preview
```

## 📜 License
This project is open-source and available under the MIT License.
