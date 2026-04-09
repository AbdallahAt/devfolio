# Abdallah Atouani - Portfolio & Consulting Website

A modern, high-performance portfolio website built with **Vite**, **React**, and **Tailwind CSS**, implementing **Material Design 3** principles.

## 🚀 Tech Stack

- **Vite** - Lightning-fast build tool and dev server
- **React 18** - Modern UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **Material Design 3** - Google's latest design system
- **Material Symbols** - Icon system
- **Space Grotesk** - Custom font family
- **Netlify Forms** - Contact form handling (free, 100 submissions/month)

## 🎨 Design Features

- **Material Design 3 Color System** - Complete 40+ color token palette with emerald green primary
- **Dark Mode Support** - System preference detection with manual toggle
- **Tonal Layering** - Sophisticated surface elevation system
- **Smooth Animations** - Transitions, hover states, and pulse effects
- **Responsive Design** - Mobile-first approach with custom breakpoints
- **Accessibility** - Semantic HTML and ARIA labels

## 📦 Project Structure

```
devfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Top navigation with dark mode toggle
│   │   ├── Hero.jsx            # Hero section with profile
│   │   ├── About.jsx           # About section
│   │   ├── Services.jsx        # Freelance services cards
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── TechStack.jsx       # Bento grid of technologies
│   │   ├── Publications.jsx    # Research publications
│   │   ├── Contact.jsx         # Netlify contact form
│   │   └── Footer.jsx          # Site footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Vite entry point
│   └── index.css               # Global styles with Tailwind
├── public/
│   ├── images/                 # Profile and assets
│   └── icons/                  # Favicon and PWA icons
├── index.html                  # HTML template with font loading
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind + MD3 config
└── netlify.toml                # Netlify deployment config
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser. The page will hot-reload on edits.

### Production Build

```bash
npm run build
```

Builds the app for production to the `dist/` folder. The build is optimized and minified.

### Preview Production Build

```bash
npm run preview
```

Locally preview the production build before deploying.

## 📝 Content Sections

1. **Hero** - Name, title, CTAs, profile image, availability status
2. **About** - Personal introduction and mission statement
3. **Services** - Three freelance service offerings:
   - Custom Backend Architecture
   - System Performance Audit
   - Fractional CTO / Consulting
4. **Experience** - Professional work history at Zalando, Trifacta, VEDA
5. **Tech Stack** - Bento grid showcasing technical competencies
6. **Publications** - Research paper from ACM SIGPLAN conference
7. **Contact** - Netlify-powered contact form with validation

## 🎨 Customization

### Colors

All Material Design 3 colors are defined in `tailwind.config.js`. The primary color is emerald green (`#00875A`). To change:

```js
// tailwind.config.js
primary: {
  DEFAULT: '#00875A',  // Change this
  // ... other shades
}
```

### Content

Content is hardcoded in component files for simplicity. To update:

- Personal info: Edit components directly
- Experience: `src/components/Experience.jsx`
- Services: `src/components/Services.jsx`
- Publications: `src/components/Publications.jsx`

### Profile Image

Replace `public/images/profile.png` with your own image. Recommended size: 512x512px or larger.

## 🚀 Deployment

### Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Configuration is already set in `netlify.toml`
4. Deploy!

**Form Setup:**
- Forms automatically work on Netlify (no additional setup needed)
- Configure email notifications in Netlify dashboard under Forms settings
- Free tier includes 100 submissions/month

### Other Platforms

The app can be deployed to any static hosting:
- Vercel
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront

Build command: `npm run build`
Publish directory: `dist`

## 🌙 Dark Mode

Dark mode is implemented with Tailwind's `class` strategy:

- Automatically detects system preference on first load
- Toggle persists to localStorage
- Smooth transitions between light/dark themes
- All MD3 colors have dark variants

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color ratios
- Focus indicators
- Screen reader friendly

## 📄 License

MIT License - see LICENSE.md

## 🙋‍♂️ Contact

- **Email**: hello@abdallah.at
- **LinkedIn**: [linkedin.com/in/abdallahat](https://www.linkedin.com/in/abdallahat/)
- **GitHub**: [github.com/abdallahat](https://github.com/abdallahat)

---

**Built with ❤️ using Vite + React + Material Design 3**
