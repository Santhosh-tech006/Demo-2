# Checkmate City Academy — Premium 3D Chess Website

An immersive, cinematic 3D Chess Academy web platform built with **React**, **Vite**, **TypeScript**, **Three.js**, **React Three Fiber**, and **Tailwind CSS**.

---

## 🌟 Highlights & Features

- **Cinematic 3D Chess Arena**:
  - Realistic floating 3D chessboard with procedural king, queen, rook, bishop, knight, and pawn geometries.
  - PBR metallic materials, studio reflections, warm/cool directional lighting, and drifting gold dust particles.
  - Interactive camera control: drag to orbit, toggle between **Perspective**, **Close-up**, and **Top Board** angles.
  - Live Theme Switcher: *Royal Gold & Obsidian*, *Emerald & Ivory*, and *Platinum & Sapphire*.
  - Click-to-inspect 3D pieces with soft hovering lift and gold glow discs.
  - WebGL fallback guard for high compatibility.
- **Sticky Luxury Navigation**:
  - Gold crown emblem, smooth scrolling navigation, and responsive mobile drawer.
- **Comprehensive Course Catalog**:
  - 6 Master programs (Chess Fundamentals, Opening Preparation, Middlegame Strategy, Endgame Mastery, Tournament Preparation, Advanced Coaching).
  - Level filters (Beginner, Intermediate, Advanced, Mastery) and interactive curriculum modal preview.
- **Grandmaster Learning Journey**:
  - 4-stage systematic roadmap (Beginner → Intermediate → Advanced → Tournament Ready).
  - Horizontal timeline on desktop and vertical pill navigation on mobile.
- **Titled Coaches Faculty**:
  - Professional coach cards with editable FIDE ratings, specializations, credentials, and 1-on-1 booking hooks.
- **Animated Achievements Counter**:
  - Live counter statistics for Students Trained, Medals Won, Coaching Hours, and ELO Gains.
- **Validated Trial Booking System**:
  - Full client-side validation for student name, email, phone, chess level, class mode (Online / Offline), and preferred time.
  - Generates instant customized trial reservation pass (`#CKM-XXXXXX`).
- **Luxury Footer & Newsletter**:
  - Full academy contact info, curriculum directory, and weekly newsletter signup.

---

## 📁 Project Directory Structure

```text
├── index.html                  # HTML entry point with luxury fonts & OpenGraph meta
├── metadata.json               # Applet configuration & metadata
├── package.json                # Dependencies and build scripts
├── README.md                   # Documentation and run guide
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler & Tailwind configuration
└── src/
    ├── App.tsx                 # Core application layout & modal controller
    ├── main.tsx                # React DOM root entry
    ├── index.css               # Tailwind CSS, custom luxury gold gradients & scrollbars
    ├── components/
    │   ├── Navbar.tsx          # Sticky glassmorphic navbar with mobile menu
    │   ├── HeroSection.tsx     # Hero banner with luxury copy & 3D chessboard
    │   ├── ChessScene3D.tsx    # Three.js / R3F procedural pieces, board & HUD
    │   ├── CourseCard.tsx      # Interactive course card with chess icons
    │   ├── CoachCard.tsx       # Faculty card with FIDE rating & booking action
    │   ├── AchievementSection.tsx # Animated live statistics counter
    │   ├── LearningJourney.tsx # 4-Stage timeline (desktop horizontal / mobile vertical)
    │   ├── Testimonials.tsx    # Testimonial review cards with rating gain tags
    │   ├── BookingForm.tsx     # Trial booking form with validation & ticket pass
    │   └── Footer.tsx          # Academy links, newsletter & contact details
    └── data/
        ├── courses.ts          # 6 course definitions & curriculum modules
        ├── coaches.ts          # Coach faculty profiles & demo ratings
        └── testimonials.ts     # Sample student success stories
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18+ recommended)
- npm or yarn

### Installation & Run

1. Clone or download the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

### Production Build

To test or generate the production build:
```bash
npm run build
```

---

## ♟️ Customizing Demo Data

- **Courses**: Modify or append courses in `src/data/courses.ts`.
- **Coaches**: Update names, FIDE ratings, bios, or photos in `src/data/coaches.ts`.
- **Testimonials**: Change ratings and stories in `src/data/testimonials.ts`.
- **Achievements**: Customize target metrics in `src/components/AchievementSection.tsx`.
