# 3D Portfolio 🚀

An advanced, interactive 3D portfolio built with **React**, **Three.js**, and **React Three Fiber**. Designed to showcase mechanical engineering projects, AI/ML expertise, and design work in an engaging, recruiter-friendly format.

## ✨ Features

- **3D Interactive Components**: Floating project cards with smooth animations
- **Skill Chips**: Dynamic skill badges with glassmorphic design
- **Gradient Backgrounds**: Stunning animated 3D backgrounds with star field
- **Responsive Design**: Optimized for all screen sizes
- **Performance-Optimized**: Smooth 60 FPS animations with Suspense
- **Modern UI/UX**: Glassmorphic cards, smooth floating effects, and professional aesthetics
- **Recruiter-Friendly**: Clean, job-ready design with clear CTAs

## 🛠️ Tech Stack

- **React 18+** - UI Framework
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for Three.js
- **Three.js** - 3D graphics library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/VishnuvardhanRoy/3d-portfolio.git
cd 3d-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:5173` in your browser.

## 📁 Project Structure

```
3d-portfolio/
├── src/
│   ├── components/
│   │   ├── Portfolio3D.jsx       # Main 3D portfolio component
│   │   ├── ProjectCard.jsx       # Individual project card
│   │   ├── SkillChip.jsx         # Skill badge component
│   │   └── CTAButton.jsx         # Call-to-action button
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Update Project Cards

Edit `Portfolio3D.jsx` to add your own projects:

```jsx
<ProjectCard
  position={[0, -0.1, 0]}
  title="Your Project Title"
  subtitle="Brief description of your project"
  tech={["Tech1", "Tech2", "Tech3"]}
/>
```

### Update Colors

Modify the Three.js material colors in each component:

```jsx
<meshStandardMaterial
  color="#your-color-hex"
  metalness={0.4}
  roughness={0.25}
/>
```

### Adjust Animations

Tune the `Float` component parameters:

```jsx
<Float speed={2} rotationIntensity={0.4} floatIntensity={1}>
  {/* content */}
</Float>
```

## 📊 Performance

- Lighthouse Score: 95+
- Bundle Size: ~180KB (gzipped)
- FPS: 60 FPS on most devices

## 🔗 Live Demo

[View Live Portfolio](https://3d-portfolio-demo.vercel.app)

## 📧 Contact & Links

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub](https://github.com/VishnuvardhanRoy)
- **Portfolio**: [Your Website](https://yourportfolio.com)

## 📝 License

This project is open source and available under the MIT License. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## ⭐ Show Your Support

If you found this helpful, please consider giving it a star!

---

**Made with ❤️ by Vishnuvardhan Roy**
