# Frontend Capstone Project — Group 1

A React web application that explores our solar system through data. Built as a capstone project for the TS Academy Frontend Development course.

---

## Live Demo

> **Deployment Link:** _Update this once deployed to Vercel_
> `https://group1-capstone-project.vercel.app`

---

## Project Summary

This application recreates a provided mockup as a fully working React web app. It fetches real planet data from an external API and displays it in a responsive grid of planet cards. It also includes a comparative NASA data table and a validated contact form. The project demonstrates HTML, CSS and JavaScript fundamentals, React component architecture, the Fetch API, responsive design, and collaborative Git workflows — all skills covered throughout the TS Academy Frontend Development course.

---

## Team Members

| Name | GitHub Profile | Role |
|------|---------------|------|
| Okorie Victor | [GitHub](https://github.com/okorievictor/) | **Group Leader** — Environment setup, VideoSection & final improvements |
| Joshua Unekwu | [GitHub](https://github.com/Joshda-Major) | **Assistant Group Leader** — Header & Hero Component |
| Loveth O. Obiajulu (Loger129) | [GitHub](https://github.com/Logeri29) | PlanetSection Component |
| Edosomwan O. Gift | [GitHub](https://github.com/gift2354) | Footer Styling |
| Eunice Nwede | [GitHub](https://github.com/eunicenwede04) | Contact Form — Structure |
| Dike Samuel Ikenna | [GitHub](https://github.com/dikeIQ) | DataTable Structure & Styling |
| Joshua Iheanacho | [GitHub](https://github.com/iheanachojoshua1-lgtm) | Final UI Improvements |
| Daniel | [GitHub](https://github.com/Danstringz) | DataTable - Styling |
| Bolarinwa | [GitHub](https://github.com/Femibliss) | Quality Assurance (QA) & Code Corrections  |
---

## Components & Contributors

| Component | File Location | Description | Contributor(s) |
|-----------|--------------|-------------|----------------|
| `Header & Hero` | `src/components/Header/` | Sticky navigation bar with Planet Creative World logo and Landing section with heading, description and two CTA buttons that scroll to their target sections |  Joshua Unekwu |
| `VideoSection` | `src/components/VideoSection/` | Two-column section with an HTML5 autoplay video and descriptive text | Okorie Victor |
| `PlanetSection & PlanetCard` | `src/components/PlanetSection/ & src/components/PlanetCard/` | Fetches planet data from the API and renders a responsive grid of PlanetCard components and Reusable `<figure>` card displaying a planet image, name and distance from the sun| Loveth O. Obiajulu (Loger129) |
| `DataTable` | `src/components/DataTable/` | NASA comparative planetary facts table with grouped planet categories | Dike Samuel Ikenna & Daniel|
| `ContactForm` | `src/components/ContactForm/` | Validated contact form with POST submission and success message | Eunice Nwede |
| `Footer` | `src/components/Footer/` | About section with team names, links to contributors and TSAcademy | Gift |
| `Quality Assurance (QA) & Code Corrections` | ` ` | Helped implement the fixes and corrections brought up in the project feedback mail. | Bolarinwa & Okorie Victor |

---

## How to Run the Project Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-ORG/YOUR-REPO-NAME.git

# 2. Navigate into the project folder
cd YOUR-REPO-NAME

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready output will be in the `/dist` folder.

---

---

## 🔌 API Reference

| Purpose | Method | URL |
|---------|--------|-----|
| Fetch planet data | GET | `https://anurella.github.io/json/planets.json` |
| Form submission | POST | `https://whitebricks.com/tsacademy.php` |

The planets API returns an array of objects. Each object contains:
- `name` — the planet name
- `distanceFromSun` — distance from the sun
- `image` — URL of the planet image

---

## Git Workflow

```
main                         ← protected, production-ready only
├── feature/header
├── feature/hero
├── feature/video-section
├── feature/planet-card
├── feature/planet-section
├── feature/data-table
├── feature/data-table-styles
├── feature/contact-form
├── feature/contact-form-submit
└── feature/footer
```

### Rules followed
- All work was done on **separate feature branches**
- Every contribution was submitted through a **Pull Request**
- The person who opened a PR did **not** review or merge their own PR
- All PRs were **reviewed and approved** before merging into main

---

## 📁 Project Structure

```
capstone-group1/
├── index.html                   # Entry point (meta author = Group 1)
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── main.jsx                 # React DOM entry point
    ├── App.jsx                  # Root component
    ├── index.css                # Global styles + CSS variables
    └── components/
        ├── Header/
        │   ├── Header.jsx
        │   └── Header.css
        ├── Hero/
        │   ├── Hero.jsx
        │   └── Hero.css
        ├── VideoSection/
        │   ├── VideoSection.jsx
        │   └── VideoSection.css
        ├── PlanetCard/
        │   ├── PlanetCard.jsx
        │   └── PlanetCard.css
        ├── PlanetSection/
        │   ├── PlanetSection.jsx
        │   └── PlanetSection.css
        ├── DataTable/
        │   ├── DataTable.jsx
        │   └── DataTable.css
        ├── ContactForm/
        │   ├── ContactForm.jsx
        │   └── ContactForm.css
        └── Footer/
            ├── Footer.jsx
            └── Footer.css
```

---