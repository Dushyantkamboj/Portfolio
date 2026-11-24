# Dushyant Kamboj - Premium Developer Portfolio Website

A modern, high-performance, and responsive developer portfolio website built with **React.js**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Features & Highlights

- **Design & Theme**:
  - Premium dark aesthetic (`#05060b`) with subtle violet and cyan gradient aura.
  - Sleek glassmorphism navigation and interactive panels with backdrop blur.
  - Smooth scrolling, hover micro-interactions, and floating code terminal animations.
  - Responsive layout optimized for mobile, tablet, and ultra-wide displays.

- **Website Sections**:
  1. **Navbar**: Sticky blurred glass navbar, custom "DK" monogram logo, smooth navigation anchors, mobile drawer menu, and resume action button.
  2. **Hero Section**: Prominent introduction, live availability badge ("Available for Full-time Roles & Projects"), CTA buttons ("View Projects" & "Download Resume"), quick social links, and an interactive code editor preview card.
  3. **About Me**: Highlights B.Tech in Computer Science, professional training at **TechGlock Software Solutions**, engineering pillars, and verified metrics.
  4. **Technical Skills**: Categorized skills with filter pills (Frontend, Backend, Database, Programming & DSA, Tools & Cloud) featuring proficiency tags and descriptions.
  5. **Featured Projects**:
     - **HR Management System**: Employee management suite with authentication, attendance, leave management, and role-based permissions (RBAC).
     - **E-Commerce Platform**: Online store with product catalog, cart persistence, and admin controls.
     - **Groq-Powered AI Chatbot**: High-speed conversational AI with code generation and markdown rendering.
     - **Python AI Voice Assistant**: Desktop voice assistant for automated productivity and web lookups.
  6. **Experience & Education**: Detailed timeline highlighting professional training at TechGlock Software Solutions, B.Tech in Computer Science, and practical project engineering.
  7. **Key Achievements**:
     - 150+ LeetCode problems solved.
     - 100 Days LeetCode Badge.
     - NCC 'Grade B' Certificate.
     - AI / ML certifications and credentials.
  8. **Contact Section**: "Let's Build Something Together!" CTA, copyable email address, active social profiles, and an interactive contact form with client validation and confetti celebration.
  9. **Footer**: Navigation links, copyright, social profiles, and quick back-to-top button.
  10. **Resume Modal**: Interactive resume view with instant `.txt` download and printable format.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- **Language**: JavaScript (ES6+)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets inside the `dist/` folder ready for deployment to Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── Dushyant_Kamboj_Resume.txt
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── BackgroundEffects.jsx
│   │   ├── Contact.jsx
│   │   ├── ExperienceEducation.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ResumeModal.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```
