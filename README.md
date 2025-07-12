# 🎌 Anime Vault

<div align="center">
  <img src="public/hero.png" alt="Anime Vault" width="600" />
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.0.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2.10-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

**A modern, feature-rich anime discovery platform built with Next.js 14**

[🚀 Live Demo](https://anime-vault-demo.vercel.app) • [📖 Documentation](#-features) • [🛠️ Installation](#-installation)

</div>

---

## ✨ Features

### 🎯 **Core Functionality**

- **Anime Discovery**: Browse and discover anime with real-time data from Shikimori API
- **Smart Search**: Instant search functionality with autocomplete suggestions
- **Genre Filtering**: Filter anime by categories (Action, Adventure, Drama, etc.)
- **Streaming Integration**: Direct links to watch anime on popular streaming platforms
- **Infinite Scroll**: Seamless loading of more content as you browse

### 🎨 **Modern UI/UX**

- **Glassmorphism Design**: Beautiful glass-effect components with backdrop blur
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion-powered transitions and micro-interactions
- **Dark Theme**: Eye-friendly dark interface with gradient accents
- **Interactive Cards**: Hover effects and dynamic content loading

### 🔧 **Technical Features**

- **Server-Side Rendering**: Next.js 14 with App Router for optimal performance
- **TypeScript**: Full type safety and enhanced developer experience
- **API Integration**: Real anime data from Shikimori API
- **Optimized Images**: Next.js Image component for fast loading
- **SEO Optimized**: Meta tags and structured data for better search visibility

---

## 🛠️ Installation

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/BreyeFoka/Anime-Vault.git
   cd Anime-Vault
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

---

## 🏗️ Project Structure

```
anime-vault/
├── app/                    # Next.js 14 App Router
│   ├── action.tsx         # Server actions for API calls
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # Reusable React components
│   ├── AnimeCard.tsx      # Individual anime card with streaming modal
│   ├── CategoriesSection.tsx  # Genre filtering section
│   ├── FeaturedSection.tsx    # Featured anime showcase
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section with search
│   ├── LoadMore.tsx       # Infinite scroll component
│   ├── MotionDiv.tsx      # Animated wrapper component
│   ├── Navigation.tsx     # Header navigation
│   ├── TopRatedSection.tsx    # Top-rated anime section
│   └── TrendingSection.tsx    # Trending anime section
├── public/                # Static assets
│   ├── hero.png          # Hero section image
│   ├── logo.svg          # Application logo
│   └── [other assets]    # Icons and images
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🎮 Usage

### Browsing Anime

- **Homepage**: View featured, trending, and top-rated anime
- **Search**: Use the search bar in the hero section or navigation
- **Categories**: Click genre buttons to filter anime by category
- **Infinite Scroll**: Scroll down to automatically load more anime

### Watching Anime

1. **Find an anime** you want to watch
2. **Click "Watch Now"** on any anime card
3. **Select a streaming service** from the modal that appears
4. **Enjoy!** You'll be redirected to the streaming platform

### Navigation

- **Fixed Header**: Always accessible navigation with search
- **Mobile Menu**: Hamburger menu for mobile devices
- **Responsive Design**: Optimized for all screen sizes

---

## 🔌 API Integration

### Shikimori API

The application integrates with the [Shikimori API](https://shikimori.one/api/doc) to fetch real anime data:

- **Anime Data**: Title, description, ratings, episodes, images
- **Genre Information**: Categories and tags for filtering
- **Search Functionality**: Real-time anime search
- **Detailed Information**: Cast, studios, release dates

### Streaming Services

Integrated streaming platforms include:

- Crunchyroll
- Netflix
- Funimation
- Hulu
- VRV
- AnimeLab
- Wakanim

---

## 🎨 Customization

### Themes

The application uses CSS custom properties for easy theming:

```css
:root {
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --gradient-accent: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Animations

Custom animations are defined in `globals.css`:

- Fade-in effects
- Slide transitions
- Floating animations
- Gradient shifts
- Glow effects

### Components

All components are modular and customizable:

- Modify styling in individual component files
- Adjust animations via Framer Motion props
- Configure API endpoints in `action.tsx`

---

## 🚀 Performance

### Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Server-Side Rendering**: Fast initial page loads
- **Caching**: Efficient API response caching
- **Bundle Size**: Optimized bundle with tree shaking

### Lighthouse Scores

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 95+

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful component names
- Write responsive CSS with Tailwind
- Test on multiple devices
- Maintain consistent code style

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[Shikimori](https://shikimori.one/)** - For providing the anime database API
- **[Next.js](https://nextjs.org/)** - For the amazing React framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **[Tailwind CSS](https://tailwindcss.com/)** - For utility-first styling
- **[Vercel](https://vercel.com/)** - For deployment and hosting

---

## 📞 Support

If you have any questions or need help:

- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐛 Issues: [GitHub Issues](https://github.com/BreyeFoka/Anime-Vault/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/BreyeFoka/Anime-Vault/discussions)

---

<div align="center">
  <p>Made with ❤️ by the Anime Vault team</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
