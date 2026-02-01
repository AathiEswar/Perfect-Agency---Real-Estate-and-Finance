# Perfect Agency — Premium Real Estate & Land Acquisition

A high-end, cinematic web experience for **Perfect Agency**, a modern real estate business specializing in land acquisition, financing assistance, and end-to-end investment support.

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-black?style=for-the-badge&logo=framer)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## ✨ Key Features

- **Cinematic Parallax Zoom**: Advanced scroll-based zoom and transform effects on architectural imagery for a premium feel.
- **Modern Interactive Accordion**: A custom-built, animated "About" section designed to showcase the complete ownership journey.
- **Fully Responsive**: Intelligent font scaling and layout adjustments for seamless browsing on mobile, tablet, and desktop.
- **Smooth Scroll**: Integrated **Lenis Scroll** for a fluid, high-end navigation experience.
- **Centralized Content**: All website text, image URLs, and data are managed through a single `content.json` file for effortless updates.
- **Dynamic Animations**: Character-by-character text reveals and viewport-synchronized section entries.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📝 Content Management

To update any text or image on the website, simply edit the file:
`src/data/content.json`

No code changes are required for content updates. The structure is organized by section:
- `navbar`: Brand details and links
- `hero`: Headline words and background image
- `about`: Accordion titles and descriptions
- `projects/properties`: List of selective works and listings
- `footer`: Contact info and social links

---

## 🎨 Aesthetic Guidelines

- **Typography**: Focused on serif elegance for headings and clean sans-serif for body text.
- **Color Palette**: Custom `saisei-beige` backgrounds with `saisei-dark` accents to maintain a minimalist, luxury atmosphere.
- **Motion**: Every interaction uses high-precision cubic-bezier curves `[0.76, 0, 0.24, 1]` to ensure a "weighted" and premium feel.

---

## ⚖️ License

Private / Confidential. Built for Perfect Agency.
