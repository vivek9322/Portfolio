# Vivek Kakade - Portfolio

A stunning, modern portfolio website built with Next.js, featuring rich animations, SEO optimization, and a beautiful user experience.

## ✨ Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Rich Animations**: Smooth animations using Framer Motion
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **PWA Ready**: Progressive Web App features for better mobile experience
- **TypeScript**: Full TypeScript support for better development experience
- **Performance**: Optimized for fast loading and smooth interactions

## 🚀 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll-based animations
- **React Type Animation** - Typewriter effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivek9322/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Dynamic sitemap
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   ├── Education.tsx       # Education details
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer component
│   └── LoadingScreen.tsx   # Loading animation
├── public/
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#00aaff', // Main brand color
    // ... other shades
  },
  dark: {
    900: '#121212', // Background color
    // ... other shades
  }
}
```

### Content
Update the content in each component file:
- Personal information in `components/Hero.tsx`
- Experience details in `components/Experience.tsx`
- Project information in `components/Projects.tsx`
- Skills in `components/Skills.tsx`
- Education in `components/Education.tsx`
- Contact details in `components/Contact.tsx`

### SEO
Update metadata in `app/layout.tsx`:
- Title and description
- Open Graph tags
- Twitter cards
- Keywords

## 📱 PWA Features

The portfolio includes Progressive Web App features:
- Installable on mobile devices
- Offline capability
- App-like experience
- Custom icons and splash screens

## 🔧 Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📊 Performance

The portfolio is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent performance
- **SEO**: 100/100 score
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Vivek Sanjay Kakade**
- LinkedIn: [linkedin.com/in/vivek-kakade](https://www.linkedin.com/in/vivek-kakade)
- GitHub: [github.com/vivek9322](https://github.com/vivek9322)
- Email: kakadevivek62@gmail.com

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Design inspiration from modern portfolio trends
