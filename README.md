# 🔥 Hacker News Lite

A fully responsive, performant, and modern **Hacker News Lite** built with the latest **Next.js 15 App Router**, **TypeScript**, and **Shadcn UI**. Features a clean UI, fast infinite loading, dynamic metadata generation, and real-time Hacker News data powered by Firebase.

---

## 🚀 Features

- ⚡ **Next.js 15 App Router** – File-based routing, layouts, metadata, and streaming support
- 🧠 **TypeScript** – End-to-end static typing for components, routes, and data fetching
- 🎯 **TanStack Query (React Query)** – For client-side caching and API optimization
- 🧱 **Shadcn/UI + Tailwind CSS** – Beautiful UI components, easily customizable
- 🗂️ **Infinite Scroll** – Seamless pagination via IntersectionObserver
- 🌙 **Dark Mode** – Native support using Tailwind and `next-themes`
- 🔎 **Search and Sort Bar** – Sort by `top`, `new`, `ask`, `show`, or `job` stories
- 📄 **Dynamic Metadata** – SEO-optimized title and description per post
- 🧵 **Nested Comments Viewer** – Renders full threaded discussions recursively
- ✅ **Production Ready** – Linted, type-checked, and optimized build

---

## 🚀 Live Demo

[🔗 View Deployed App](https://mini-hacker-news-cy4l.vercel.app/)


---

## 🛠️ Tech Stack

| Tech             | Purpose                            |
|------------------|------------------------------------|
| **Next.js 15**   | Fullstack React Framework          |
| **App Router**   | Routing & layouts (app/ directory) |
| **TypeScript**   | Type safety                        |
| **Tailwind CSS** | Utility-first styling              |
| **Shadcn UI**    | Accessible UI components           |
| **Lucide Icons** | Clean SVG icons                    |
| **Framer Motion**| Animations                         |
| **React Query**  | Data fetching & caching            |
| **Firebase**     | Hacker News official API backend   |

---

## 🧩 Folder Structure

```bash
src/
├── app/ # App Router pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Home page
│ └── post/[id]/ # Dynamic story details
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── lib/ # Utility functions (API, helpers)
├── styles/ # Global styles
```

---

## 🧪 Setup Locally

```bash
# 1. Clone the repo
git clone https://github.com/jubayers-r/mini-hacker-news.git
cd mini-hacker-news

# 2. Install dependencies
pnpm install

# 3. Start the dev server
pnpm dev
```

Then open http://localhost:3000 in your browser.

## 📦 Build for Production

```bash
pnpm build
```
---

## Author

**Jubayer Shikder** </br>

[🐦 Twitter (X)](https://x.com/jubayers_r) • [📧 Email](mailto:jubayer.shikder.007@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/jubayers-r) • [💻 GitHub](https://github.com/jubayers-r)</br>
Feel free to reach out if you'd like to collaborate or need help using the project!

## 📜 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and fork..