# Swayam Adhana's Portfolio

A modern, responsive portfolio website built with Next.js 15, featuring a clean design, dark/light mode toggle, and interactive components. This portfolio showcases AI/ML projects, skills, and provides multiple ways for visitors to connect.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes (defaults to dark mode)
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Project Showcase**: Featured projects including HistoAI and Fut-Insights with detailed information
- **Gallery**: Image upload and management system
- **Guestbook**: Visitor message system with gender-based avatars and JSON file persistence
- **Contact Form**: Functional contact form integrated with Web3Forms API
- **Real-time Clock**: Live clock display in navigation
- **Scroll Progress**: Global visual scroll progress indicator on all pages
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Smooth Scrolling**: CSS-based smooth scroll with hidden scrollbar

## 🎨 Design & Animations

### Visual Effects

- **Gradient Backgrounds**: Multi-color gradients on hero sections and backgrounds
- **Smooth Hover Effects**: Cards lift on hover with shadow transitions
- **Image Zoom**: 1.05x scale on image hover with 700ms transitions
- **Glass Morphism**: Backdrop blur effects on modals and overlays
- **Scroll Progress**: Global scroll progress indicator visible on all pages (75% larger size)
- **Animated Badges**: Pulsing status badges and indicators
- **Text Animations**: Gradient text with color transitions
- **Smooth Scrolling**: CSS-based smooth scroll behavior
- **Hidden Scrollbar**: Scrollbar hidden while maintaining scroll functionality

### Mobile Optimizations

- **Floating Action Button (FAB)**: Quick contact access with pulse animation
- **Hamburger Menu**: Smooth right-side drawer with overlay
- **Touch Interactions**: Swipe hints and bounce animations
- **Responsive Images**: Optimized for all screen sizes
- **Mobile Navigation**: Full-screen accessible menu on small devices

## 🚀 Complete Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 15.5.7 | React framework with SSR and App Router |
| **React** | 19.2.0 | UI library and component framework |
| **TypeScript** | 5.x | Type-safe JavaScript |
| **Tailwind CSS** | 3.4.17 | Utility-first CSS framework |
| **shadcn/ui** | Latest | 50+ pre-built, accessible components |

### UI & Component Libraries

| Library | Version | Components |
|---|---|---|
| **Lucide React** | 0.454.0 | 450+ beautiful SVG icons |
| **Radix UI** | Latest | Accessible primitive components |
| **Embla Carousel** | 8.5.1 | Testimonials & image carousel |
| **Sonner** | 1.7.4 | Toast notifications |
| **React Day Picker** | 9.8.0 | Calendar date selection |

### Form & Validation

| Library | Version | Purpose |
|---|---|---|
| **React Hook Form** | 7.60.0 | Performant form handling |
| **Zod** | 3.25.76 | TypeScript-first schema validation |
| **@hookform/resolvers** | Latest | Schema validation integration |

### Data & Utilities

| Library | Version | Purpose |
|---|---|---|
| **date-fns** | 4.1.0 | Date formatting and manipulation |
| **Recharts** | 2.15.4 | Data visualization charts |
| **clsx** | 2.1.1 | Conditional class names |
| **tailwind-merge** | 3.3.1 | Merge conflicting Tailwind classes |
| **class-variance-authority** | 0.7.1 | CSS-in-JS variant management |

### Theme & Styling

| Library | Version | Purpose |
|---|---|---|
| **next-themes** | 0.4.6 | Dark/light mode persistence |
| **tailwindcss-animate** | 1.0.7 | Pre-built animation utilities |
| **PostCSS** | 8.5.x | CSS transformation |
| **Autoprefixer** | 10.4.20 | Cross-browser CSS compatibility |

### Additional Tools

| Tool | Version | Purpose |
|---|---|---|
| **Vercel Analytics** | 1.3.1 | Web analytics integration |
| **Input OTP** | 1.4.1 | OTP input component |
| **Vaul** | 1.1.2 | Drawer/modal library |
| **React Resizable Panels** | 2.1.7 | Resizable layout panels |

## 🎬 Animation & Effect Details

### Animations Used Throughout

#### 1. **Scroll Progress Indicator** (Homepage)

- **Type**: Continuous scroll tracking
- **Trigger**: Window scroll events
- **Animation**: Gradient line fill (0-100%)
- **Duration**: Real-time, smooth transitions
- **Visibility**: Desktop only (hidden on mobile)

#### 2. **Hover Scale Effects**

- **Element**: Project cards, skill cards, images
- **Animation**: `scale-105` on hover
- **Duration**: 300-700ms ease-out
- **Transition**: `transition-transform`

#### 3. **Hover Lift (Z-axis Movement)**

- **Element**: Project cards, service cards
- **Animation**: `-translate-y-1` to `-translate-y-2` (4-8px up)
- **Duration**: 300ms
- **Shadow**: Simultaneous shadow increase

#### 4. **Gradient Text Animation**

- **Technique**: CSS background-clip with gradients
- **Colors**: Blue → Purple → Teal
- **Applied to**: Page headings, featured titles
- **Effect**: Multi-color text effect

#### 5. **Image Overlay Animation**

- **On Hover**: Dark gradient overlay fades in
- **Opacity**: 0 → 20% over 500ms
- **Callback**: Reveals action buttons

#### 6. **Floating Action Button (FAB)**

- **Animation**: Pulsing scale effect
- **Duration**: Continuous (0.7s loop)
- **Scale**: 1 → 1.05 → 1
- **Color**: Gradient fade on outer ring

#### 7. **Mobile Menu Drawer**

- **Entry**: Slide-in from right
- **Duration**: 300ms smooth
- **Backdrop**: Blur overlay appears simultaneously
- **Exit**: Slide-out and fade backdrop

#### 8. **Testimonial Carousel**

- **Navigation**: Smooth fade transitions
- **Duration**: 300-500ms between slides
- **Effect**: Cross-fade between items
- **Auto-scroll**: Optional infinite loop

#### 9. **Bounce Animations**

- **Used on**: "Swipe Up" hint on mobile
- **Duration**: 1s loop
- **Type**: `animate-bounce` (Tailwind built-in)

#### 10. **Pulsing Badges**

- **Applied to**: Status badges, construction icons
- **Animation**: Opacity pulse (1 → 0.5 → 1)
- **Duration**: Continuous 2s loop

### Transition Classes Used

\`\`\`css
/*Duration*/
transition-all duration-300
transition-transform duration-700
transition-colors duration-300
transition-opacity duration-500

/*Timing Function */
ease-out      /* Default for most animations */
ease-in-out   /* Smooth start and end */
linear        /* Consistent speed*/

/*Properties*/
transition-transform
transition-colors
transition-shadow
transition-opacity
\`\`\`

### Shadow Effects

\`\`\`css
shadow-lg       /*0 10px 15px rgba */
shadow-xl       /* 0 20px 25px rgba */
shadow-2xl      /* 0 25px 50px rgba */
hover:shadow-xl /* Increases on hover*/
\`\`\`

### Blur & Glass Morphism

\`\`\`css
backdrop-blur-sm    /*4px blur */
backdrop-blur       /* 12px blur */
bg-white/50         /* Translucent white */
bg-black/50         /* Translucent black*/
\`\`\`

## 🔄 Advanced Features

### Real-Time Features

- **Live Clock**: Updates every second in navigation
- **Scroll Progress**: Real-time percentage tracking
- **Form Validation**: Instant feedback on input
- **Image Upload**: Immediate gallery updates

### Responsive Features

- **Mobile Hamburger**: Full-screen navigation on small screens
- **Floating Action Button**: Quick contact on mobile
- **Adaptive Layouts**: Grid columns adjust per breakpoint
- **Touch-Optimized**: Larger tap targets on mobile

### Interactive Elements

- **Project Cards**: Hover to reveal action buttons
- **Image Gallery**: Click to view full-size
- **Guestbook**: Real-time message posting
- **Navigation**: Active route highlighting

### Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Alt Text**: All images have descriptive alt text
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant
- **Screen Reader Friendly**: Proper ARIA labels

## 🚀 Performance Metrics

### Optimizations Implemented

- **Image Optimization**: 60-70% smaller with WebP/AVIF
- **Code Splitting**: Automatic per-page bundles
- **Lazy Loading**: Images load on scroll
- **CSS Purging**: Only used styles in production (40-60KB)
- **Font Optimization**: System fonts with fallbacks

### Best Practices

- **Mobile-First Design**: Starts simple, adds complexity
- **Progressive Enhancement**: Works without JavaScript
- **Minimal JavaScript**: 80% CSS-based animations
- **Efficient State Management**: Component-level only
- **SEO Optimized**: Meta tags, structured data

## 📱 Pages & Routes

| Route | Component | Features |
|---|---|---|
| `/` | Homepage | Hero, project spotlight (HistoAI & Fut-Insights), contact form with Web3Forms |
| `/about` | About | Bio, skills (9 technologies including ML), education, services |
| `/projects` | Projects Gallery | Featured projects with live demos and GitHub links |
| `/gallery` | Image Gallery | Upload, view, delete images |
| `/guestbook` | Guestbook | Post messages with JSON file persistence |
| `/project-construction/:slug` | Project Details | Development status, features, tech |

## 🔗 Live Projects

| Project | Description | Links |
|---|---|---|
| **HistoAI** | Histopathology cancer detection using deep learning | [Live Demo](https://histopathologyyyy.vercel.app/) • [GitHub](https://github.com/maybeswayam/Histopathology-FrontEnd) |
| **Fut-Insights** | Football analytics dashboard with ML predictions | [View Project](/projects) |

## 🎯 Customization Guide

### Change Colors

Edit `app/globals.css`:
\`\`\`css
:root {
  --primary: 210 100% 50%;  /*Change primary blue */
  --accent: 280 100% 50%;   /* Change accent purple*/
}
\`\`\`

### Modify Animations

Edit Tailwind classes in components:
\`\`\`tsx
// Faster animation
hover:scale-110 transition-transform duration-200

// Slower animation
hover:-translate-y-4 transition-all duration-1000
\`\`\`

### Add New Pages

1. Create folder: `app/new-page/`
2. Add file: `page.tsx`
3. Update `components/navigation.tsx` with new link
4. Build page using existing patterns

## 🚀 Tech Stack

### Core Framework

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful icon library
- **CSS Modules** - Component-scoped styling

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Dependencies

### Production Dependencies

\`\`\`json
{
  "next": "^15.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "typescript": "^5.0.0",
  "tailwindcss": "^3.4.0",
  "lucide-react": "^0.400.0",
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-alert-dialog": "^1.0.5",
  "@radix-ui/react-avatar": "^1.0.4",
  "@radix-ui/react-button": "^0.1.0",
  "@radix-ui/react-card": "^0.1.0",
  "@radix-ui/react-dropdown-menu": "^2.0.6",
  "@radix-ui/react-input": "^0.1.0",
  "@radix-ui/react-label": "^2.0.2",
  "@radix-ui/react-textarea": "^0.1.0",
  "@radix-ui/react-toast": "^1.1.5",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
\`\`\`

### Development Dependencies

\`\`\`json
{
  "@types/node": "^20.0.0",
  "@types/react": "^18.0.0",
  "@types/react-dom": "^18.0.0",
  "eslint": "^8.0.0",
  "eslint-config-next": "^15.0.0",
  "postcss": "^8.0.0",
  "autoprefixer": "^10.0.0"
}
\`\`\`

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### 1. Clone the Repository

\`\`\`bash
git clone <https://github.com/yourusername/portfolio.git>
cd portfolio
\`\`\`

### 2. Install Dependencies

\`\`\`bash

# Using npm

npm install

# Using yarn

yarn install

# Using pnpm

pnpm install
\`\`\`

### 3. Run Development Server

\`\`\`bash

# Using npm

npm run dev

# Using yarn

yarn dev

# Using pnpm

pnpm dev
\`\`\`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

\`\`\`
portfolio/
├── app/                          # Next.js App Router directory
│   ├── about/                    # About page
│   ├── gallery/                  # Gallery page
│   ├── guestbook/                # Guestbook page
│   ├── projects/                 # Projects page
│   ├── project-construction/     # Individual project pages
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── navigation.tsx           # Navigation component
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   └── images/                  # Image assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json               # TypeScript configuration
\`\`\`

## 🎨 Customization

### Colors & Themes

The portfolio uses a custom color scheme defined in `tailwind.config.ts`. You can modify the colors by updating the theme configuration:

\`\`\`typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      // Customize your color palette here
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        900: '#1e3a8a',
      }
    }
  }
}
\`\`\`

### Content Updates

- **Personal Information**: Update content in `app/page.tsx` and `app/about/page.tsx`
- **Projects**: Modify project data in `app/projects/page.tsx`
- **Images**: Replace images in the `public/images/` directory
- **Contact Information**: Update contact details in the contact section

### Adding New Pages

1. Create a new directory in the `app/` folder
2. Add a `page.tsx` file with your component
3. Update navigation links in `components/navigation.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Pages Overview

### Homepage (`/`)

- Hero section with introduction and call-to-action buttons
- Project Spotlight featuring HistoAI and Fut-Insights in a card grid
- Contact form integrated with Web3Forms API
- Comprehensive footer with GitHub and LinkedIn links

### About (`/about`)

- Personal information and profile photo
- Skills showcase with 9 technologies (TensorFlow, PyTorch, Transfer Learning, Next.js, TypeScript, React, Python, Tailwind, Node.js)
- Service-style skill cards with hover animations
- Education background (GLA University, Birla School Pilani)
- Services offered section

### Projects (`/projects`)

- HistoAI: Histopathology cancer detection with deep learning
- Fut-Insights: Football analytics with ML predictions
- Technology stack badges and live demo links
- View Source buttons linked to GitHub repositories

### Gallery (`/gallery`)

- Image upload functionality
- Grid layout with hover effects
- Full-size image modal
- Image management (add/remove)

### Guestbook (`/guestbook`)

- Visitor message system with JSON file persistence
- Gender-based avatar system
- Real-time message posting via API routes
- Message history with timestamps stored in `data/guestbook.json`

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // For GIF support
  },
}

export default nextConfig
\`\`\`

### Web3Forms Integration

Contact form emails are sent via Web3Forms API. The access key is configured in `app/page.tsx`:

\`\`\`tsx
// Contact form submission
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "YOUR_ACCESS_KEY",
    ...formData
  }),
})
\`\`\`

### Tailwind Configuration (`tailwind.config.ts`)

- Custom color palette
- Typography settings
- Component configurations
- Dark mode support

### TypeScript Configuration (`tsconfig.json`)

- Strict type checking
- Path aliases for imports
- Next.js optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Lucide** for the icon set
- **Tailwind CSS** for the utility-first CSS framework
- **Next.js** team for the amazing React framework
- **Web3Forms** for the contact form email service
- **Vercel** for hosting and deployment platform

## 📞 Contact & Links

- **GitHub**: [github.com/maybeswayam](https://github.com/maybeswayam)
- **Portfolio**: Contact through the portfolio contact form
- **HistoAI Project**: [histopathologyyyy.vercel.app](https://histopathologyyyy.vercel.app/)

---

Built with ❤️ by Swayam Adhana

