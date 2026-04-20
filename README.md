# Agnik Dutta's Portfolio

## 🚀 Overview
This is a modern, responsive personal portfolio website built with React.js. It showcases my projects, skills, resume, and contact information with smooth animations and interactive elements.

![Portfolio Screenshot](src/Assets/home-bg.jpg)

## ✨ Features
- **Animated Home Section** with typewriter effect and particles background
- **About Section** with tech stack, tool stack, and GitHub contributions calendar
- **Projects Section** with project cards and screenshots
- **Interactive Resume** using react-pdf for PDF viewing
- **Responsive Navbar** with routing via React Router DOM
- **Smooth Scrolling** and parallax effects
- **Bootstrap** for styling and mobile responsiveness

## 🛠️ Tech Stack
- React 17 + React Router DOM
- Bootstrap 5 + React Bootstrap
- Typewriter Effect, React Particles, React Tilt (parallax)
- React PDF Renderer
- Axios, React Icons
- Create React App for build tooling

## 📖 Quick Start (Local Development)

1. Clone or navigate to the project:
   ```
   cd "/Users/agnikdutta/Documents/CODING/My portfolio"
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   Opens at `http://localhost:3000`

4. Build for production:
   ```
   npm run build
   ```

## ☁️ Deploy to Vercel (Recommended - One-Click & Free)

Vercel auto-detects Create React App projects!

1. **Push to GitHub** (if not already):
   ```
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in → New Project → Import your GitHub repo
   - Configure (auto-detected):
     | Setting | Value |
     |---------|-------|
     | Framework | Create React App |
     | Build Command | `npm run build` |
     | Output Directory | `build` |
     | Install Command | `npm install` |
   - Click **Deploy** → Live URL in seconds!

3. **Custom Domain** (optional): Add in Vercel dashboard.

**Preview URL example**: `https://your-project.vercel.app`

## 📁 Project Structure
```
portfolio/
├── public/
├── src/
│   ├── components/ (Navbar, Home, About, Projects, Resume, Footer)
│   ├── Assets/ (images, resume PDF)
│   └── App.js (main routing)
├── package.json
└── README.md
```

## 🤝 Contributing
Feel free to fork and submit PRs!

## 📞 Contact
- LinkedIn / Email / GitHub: Update via components/About/About.js
- Resume: [Download PDF](src/Assets/Agnik_Dutta_SRM_.pdf)

---

⭐ Star this repo if you like it! Deployed with ❤️ using Vercel.

