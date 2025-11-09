# LearnBuddy Platform

A modern, interactive learning platform that combines multiple learning areas ("Buddies") with a full-featured blog system in a single Progressive Web App (PWA).

## 🌟 Features

### 📚 LearnBuddy - Interactive Learning System

LearnBuddy offers various learning areas, each with its own specialized content and features:

- **Boulder Buddy**: Climbing training, workouts, session logging, and strength tests
- **English Buddy**: Grammar lessons, reading library, vocabulary exercises, and video player
- **Gym Buddy**: Fitness training and workout plans
- **Yoga Buddy**: Yoga exercises and routines
- **Run Buddy**: Running training programs
- **Swim Buddy**: Swimming training
- **Piano Buddy**: Piano learning resources
- **Cook Buddy**: Cooking recipes and guides
- **Cybersecurity Buddy**: IT security tutorials
- **Life Skills Buddy**: Life skills and personal development

Each buddy includes:
- Interactive lessons with quizzes
- Progress tracking
- Customizable training plans
- Multi-language support (English/German)

### ✍️ Blog System

A complete blog platform with:

- **Markdown Support**: Write posts in Markdown with syntax highlighting
- **Categories & Tags**: Organize content with categories and tags
- **Advanced Search**: Fuzzy search powered by Fuse.js
- **RSS Feed**: Automatic RSS feed generation
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Responsive Design**: Mobile-first, works on all devices
- **Dark/Light Mode**: Theme switching support
- **Reading Progress**: Track reading progress for long posts
- **Table of Contents**: Auto-generated TOC for better navigation
- **View Counter**: Track post views
- **GitHub Activity**: Display GitHub contributions

### 🛠️ Admin Panel

GitHub-based content management:

- **GitHub Authentication**: Secure OAuth authentication
- **Rich Text Editor**: Markdown editor with live preview
- **Post Management**: Create, edit, and delete posts
- **Auto-commit**: Automatically commit changes to GitHub
- **Preview Mode**: See how posts will look before publishing

### 🎨 Additional Features

- **Progressive Web App (PWA)**: Installable, works offline
- **Multi-language**: Full English/German support
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth animations with Framer Motion
- **Theme Support**: Dark and light modes
- **Analytics**: Umami integration ready
- **CV/Portfolio**: Interactive CV page with print support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/learn_bouldering.git
cd learn_bouldering
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── learnbuddy/          # LearnBuddy learning system
│   ├── buddies/         # Individual buddy modules
│   ├── context/         # React Context providers
│   └── shared/          # Shared LearnBuddy components
│
├── blog/                # Blog system
│   ├── components/      # Blog components
│   ├── posts/           # Blog post files
│   └── utils/           # Blog utilities
│
├── admin/               # Admin panel
│   ├── components/      # Admin components
│   ├── hooks/           # Custom hooks
│   └── utils/           # Admin utilities
│
├── cv/                  # CV/Portfolio page
└── shared/              # Shared components across all modules
```

## 🛣️ Routing

The application uses hash-based routing:

- `/` or `#/` → Blog (default)
- `#/blog` → Blog homepage
- `#/blog/post/:id` → Individual blog post
- `#/blog/search` → Blog search
- `#/blog/categories` → Blog categories
- `#/blog/projects` → Projects page
- `#/learnbuddy/:buddy/home` → Buddy homepage
- `#/learnbuddy/:buddy/lessons` → Buddy lessons
- `#/learnbuddy/:buddy/plan` → Training plan
- `#/cv` → CV/Portfolio page
- `#/privacy` → Privacy policy
- `#/imprint` → Imprint
- `#/admin` → Admin panel

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Features
- **PWA** - Progressive Web App support (vite-plugin-pwa)
- **Markdown** - Markdown rendering (react-markdown, markdown-to-jsx)
- **Search** - Fuzzy search (Fuse.js)
- **PDF** - PDF viewing (react-pdf, pdfjs-dist)
- **Syntax Highlighting** - Code syntax highlighting (react-syntax-highlighter)

### Development
- **TypeScript** - Type definitions
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Creating Content

### Adding a New Blog Post

1. Navigate to `#/admin` and authenticate with GitHub
2. Click "New Post"
3. Fill in the post details (title, category, tags, etc.)
4. Write your content in Markdown
5. Preview and publish

Posts are automatically committed to GitHub in the `src/blog/posts/` directory.

### Adding a New Buddy

1. Create a new directory in `src/learnbuddy/buddies/`
2. Add a `config.js` file with buddy configuration
3. Create components in the `components/` directory
4. Add lessons in the `lessons/` directory
5. Register the buddy in `src/learnbuddy/context/BuddyContext.jsx`

## 🚢 Deployment

The project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

### Automatic Deployment

1. Push to the `master` branch
2. GitHub Actions will automatically:
   - Build the project
   - Deploy to GitHub Pages

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist/` directory to your hosting provider

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. The workflow will automatically deploy on every push to `master`

## 🌐 Environment Variables

For GitHub Pages deployment, you can set the base URL:

```bash
BASE_URL=/your-repo-name/
```

If deploying to a root domain (e.g., `username.github.io`), leave it as `/`.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

Built with ❤️ using React and Vite

