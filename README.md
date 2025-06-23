# 🍋 Little Lemon – Restaurant Reservation & Menu SPA

[![CI](https://github.com/<username>/little-lemon/actions/workflows/ci.yml/badge.svg)](https://github.com/<username>/little-lemon/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen.svg)](https://github.com/<username>/little-lemon/actions)

> **One-page restaurant app built with React 18, Chakra UI, and Formik/Yup.**  
> Provides real-time table reservations, menu browsing, and adaptive theming—all deployed on Vercel in under 4 weeks.

<p align="center">
  <img src="docs/demo.gif" width="700" alt="Demo GIF"/>
</p>

---

## ✨ Features
- **Live Reservation Form** – validates party size, date & time with Formik + Yup.
- **Menu Catalogue** – dynamic categories (starters, mains, desserts) sourced from JSON API.
- **Responsive UI** – Chakra UI Grid/Flex layout, dark/light mode toggle.
- **Global State** – React Context for cart & auth; lazy-loaded routes via React Router v6.
- **Unit + Integration Tests** – 90 %+ coverage with Jest & React Testing Library (RTL).
- **Zero-Config Deploy** – CI → Vercel; preview URLs on every pull request.

---

## 🔧 Tech Stack
| Layer | Tech |
|-------|------|
| **Frontend** | React 18, Chakra UI, React Router 6 |
| **Forms & Validation** | Formik + Yup |
| **State Management** | React Context + custom hooks |
| **Testing** | Jest, React Testing Library, MSW |
| **Tooling** | Vite, ESLint + Prettier, Husky pre-commit |
| **CI/CD** | GitHub Actions → Vercel |

---

## 🚀 Live Demo
> https://little-lemon-project-one.vercel.app/

> Admin preview: `demo@littlelemon.com / demo123`

---

## ⚡ Quick Start

```bash
# 1. Clone
git clone https://github.com/<username>/little-lemon.git
cd little-lemon

# 2. Install deps (Node 20 LTS)
npm install   # or pnpm install

# 3. Run dev server
npm run dev   # localhost:5173

# 4. Run tests + coverage
npm test      # watch mode
npm run coverage
