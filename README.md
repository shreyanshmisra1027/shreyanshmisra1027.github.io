# 🚀 Shreyansh | Personal Developer Portfolio & 3D Interactive Showcase

A production-ready personal developer portfolio featuring an interactive 3D technology centerpiece built with React, TypeScript, Three.js, React Three Fiber (R3F), and Vite.

The aesthetic combines **Nothing OS-inspired monochromatic design**, **Linear's precision minimalism**, **Vercel's typographic hierarchy**, and **premium industrial hardware product visualization**.

---

## 🎨 Visual Identity

- **Primary Background:** `#090909`
- **Secondary Background:** `#111111`
- **Card Background:** `#151515`
- **Primary Text:** `#F2F2F2`
- **Secondary Text:** `#999999`
- **Accent Turquoise:** `#00D6C5` (used selectively for active states, interactive highlights, and 3D lighting)
- **Subtle Borders:** `#252525`
- **Typography:** Geist / Inter, JetBrains Mono

---

## ⚙️ Architecture & Features

### 1. Interactive 3D Technology Centerpiece
- Built with Three.js and React Three Fiber (R3F).
- Features a futuristic, dark graphite processor/motherboard motif with subtle turquoise emissive traces and gentle pointer parallax/idle rotation.
- Optimized for integrated graphics hardware (AMD Ryzen 7 5800H / Radeon Vega) with capped DPR and efficient geometry.
- Graceful WebGL detection and fallback.
- Code-split vendor bundle for fast initial load.

### 2. Single-Page Application Structure
- **Navbar:** Sticky navigation with glassmorphic backdrop and mobile menu drawer.
- **Hero Section:** Balanced two-column layout with bold typography, bio, CTA buttons, and interactive 3D centerpiece.
- **About Section:** Authentic narrative outlining CSE Cybersecurity studies at VIT Chennai and engineering philosophy.
- **Projects Section:** Data-driven project cards (CrankView, Python Projects, C/C++ Systems Experiments, Arduino Projects) with 3D tilt micro-interactions, tech stack badges, and GitHub links.
- **Skills & Currently Exploring:** Categorized technical groupings (Programming, Web, Tools, Systems/Security) without arbitrary percentage bars, plus dedicated current learning tracks.
- **Contact & Footer:** Clean connection links (GitHub, LinkedIn, Email via `misrashreyansh6@gmail.com`) and dynamic copyright year.

---

## 🛠 Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **3D Graphics:** Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Build Tool:** Vite 6
- **State Management:** Zustand
- **Animations:** GSAP & CSS transforms
- **Styling:** Custom CSS with CSS Variables

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview
```

---

## 🚢 Deployment

### GitHub Pages (Automated via GitHub Actions)
The repository includes `.github/workflows/deploy.yml` which automatically builds and deploys to GitHub Pages on every push to `main`.

### Netlify Deployment
The repository includes `netlify.toml` pre-configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules (`/*` to `/index.html`)
- Optimized caching headers for assets and vendor bundles

To deploy to Netlify:
1. Connect your repository at [app.netlify.com](https://app.netlify.com)
2. Build settings will auto-detect from `netlify.toml`
3. Click **Deploy**

---

## 👤 Personal Profile

- **Name:** Shreyansh
- **Email:** misrashreyansh6@gmail.com
- **Role:** Computer Science & Engineering Student
- **Specialization:** Cybersecurity
- **University:** Vellore Institute of Technology (VIT), Chennai
- **Graduation Year:** 2030
- **Location:** India

### Engineering Philosophy
- Mastery over shortcuts.
- Understanding over memorization.
- Building over merely consuming tutorials.
- Consistency over temporary motivation.
- Writing code to solve actual problems.

---

## 📝 License

Open-source under the MIT License.
