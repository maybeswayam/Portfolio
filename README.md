# Swayam Adhana | Portfolio

> AI/ML Developer • Full Stack Engineer • B.Tech CS Student

A modern portfolio built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**.

🔗 **HistoAI Live**: [histopathologyyyy.vercel.app](https://histopathologyyyy.vercel.app/) | 🐙 **GitHub**: [maybeswayam](https://github.com/maybeswayam)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Dark/Light Mode** | Theme toggle with system preference |
| 📱 **Fully Responsive** | Mobile-first design |
| 🚀 **Project Showcase** | HistoAI & Fut-Insights with live demos |
| 📝 **Guestbook** | Persistent messages with JSON storage |
| 📧 **Contact Form** | Web3Forms API integration |
| 🎯 **Scroll Progress** | Global progress indicator |

---

## 🛠️ Tech Stack

**Core**: Next.js 15.5.7 • React 19 • TypeScript • Tailwind CSS

**UI**: shadcn/ui • Radix UI • Lucide Icons • Sonner (toasts)

**Forms**: React Hook Form • Zod • Web3Forms

**Theme**: next-themes • tailwindcss-animate

---

## 📁 Project Structure

```
app/
├── page.tsx          # Homepage with hero & contact
├── about/            # Skills, education, services
├── projects/         # Project showcase
├── gallery/          # Image gallery
├── guestbook/        # Visitor messages
└── api/guestbook/    # API routes

components/
├── navigation.tsx    # Main nav with clock
├── scroll-progress.tsx
└── ui/               # shadcn components

data/
└── guestbook.json    # Message persistence
```

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

Open [localhost:3000](http://localhost:3000)

---

## 🔗 Featured Projects

| Project | Description | Stack |
|---------|-------------|-------|
| **HistoAI** | Histopathology cancer detection | Python, TensorFlow, Next.js |
| **Fut-Insights** | Football analytics with ML | Python, React, Data Viz |

---

## 📱 Pages

- `/` - Hero, project spotlight, contact form
- `/about` - Skills (9 technologies), education, services
- `/projects` - Full project showcase with GitHub links
- `/gallery` - Image upload & management
- `/guestbook` - Visitor messages

---

## ⚙️ Configuration

**Contact Form**: Update Web3Forms access key in `app/page.tsx`

**Guestbook**: Messages stored in `data/guestbook.json`

**Theme**: Defaults to dark mode via `next-themes`

---

## 📄 License

MIT License

---

Built with ❤️ by **Swayam Adhana**
