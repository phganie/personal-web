# Personal Portfolio Website

A modern, interactive personal portfolio website showcasing my work as an AI/ML Engineer & Product Thinker. Built with React, featuring smooth animations, dark mode support, and an engaging cat-catching mini-game!

🌐 **Live Site**: [https://phganie.github.io/phuongan-bui](https://phganie.github.io/phuongan-bui)

## ✨ Features

### 🎨 Design & UX
- **Modern UI/UX**: Clean, gradient-based design with smooth animations
- **Dark Mode**: Full dark mode support with theme toggle
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Background**: Animated cat emoji background

### 🎮 Interactive Mini-Game
- **Cat Catching Game**: Fun mini-game where you catch falling cats
- **30-Second Challenge**: Catch 10 cats within 30 seconds to win
- **Danger Elements**: Avoid bombs 💣 and zombies 🧟 or lose instantly!
- **Smooth Animations**: Optimized performance with requestAnimationFrame
- **Peeking Cat**: A friendly cat that appears when you dismiss the game prompt

### 📱 Sections
- **Hero**: Animated typing introduction with call-to-action buttons
- **Story**: Journey through my development as an engineer
- **About**: Professional background and experience
- **Projects**: Showcase of notable projects with descriptions
- **Skills**: Technical skills organized by category
- **Contact**: Multiple contact methods (email, phone, location, social links)
- **Footer**: Quick navigation links and social media

### 🎯 Key Highlights
- **Resume Download**: Direct download link for resume PDF
- **Contact Information**: Multiple ways to get in touch
- **Social Links**: GitHub and LinkedIn integration
- **Smooth Scrolling**: Seamless navigation between sections
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **React** 19.1.0 - UI framework
- **Framer Motion** 12.9.2 - Animation library
- **Tailwind CSS** 3.4.1 - Utility-first CSS framework
- **React Scripts** 5.0.1 - Build tooling
- **gh-pages** - GitHub Pages deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/phganie/phuongan-bui.git
cd phuongan-bui
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder. Optimized and minified for deployment.

### `npm run deploy`
Deploys the built app to GitHub Pages (runs `predeploy` automatically)

## 📁 Project Structure

```
src/
├── components/
│   ├── About.js          # About section with experience
│   ├── CatEmojiBackground.js  # Animated background cats
│   ├── CatGame.js         # Interactive cat-catching game
│   ├── Contact.js         # Contact information section
│   ├── Footer.js         # Footer with links
│   ├── Hero.js           # Hero section with introduction
│   ├── Navbar.js         # Navigation bar
│   ├── Projects.js       # Projects showcase
│   ├── Skills.js         # Skills section
│   ├── Story.js          # Personal journey story
│   └── ThemeToggle.js    # Dark mode toggle
├── App.js                # Main app component
└── index.js              # Entry point
```

## 🎮 Game Features

The cat-catching mini-game includes:
- **Objective**: Catch 10 cats in 30 seconds
- **Dangers**: Avoid clicking bombs or zombies
- **Scoring**: Each cat caught adds to your score
- **Timer**: Real-time countdown with visual feedback
- **Win Condition**: Catch all 10 cats to see the celebration message
- **Performance**: Optimized animations using requestAnimationFrame

## 🎨 Customization

### Updating Personal Information
- Edit contact information in `src/components/Contact.js`
- Update resume link in `src/components/Hero.js`
- Modify social links in `src/components/Footer.js` and `src/components/Contact.js`

### Styling
- Tailwind CSS classes are used throughout
- Color scheme can be modified in component files
- Dark mode colors are defined with `dark:` prefixes

### Content
- Update sections in respective component files:
  - `Hero.js` - Introduction and tagline
  - `Story.js` - Personal journey chapters
  - `About.js` - Professional background
  - `Projects.js` - Project showcase
  - `Skills.js` - Technical skills

## 🚢 Deployment

The site is deployed to GitHub Pages. To deploy:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: `https://phganie.github.io/phuongan-bui`

## 📝 License

This project is private and personal.

## 👤 Author

**Phuong-An Bui**
- Portfolio: [https://phganie.github.io/phuongan-bui](https://phganie.github.io/phuongan-bui)
- GitHub: [@phganie](https://github.com/phganie)
- LinkedIn: [phuongan-bui](https://linkedin.com/in/phuongan-bui)

---

Built with ❤️ using React and Framer Motion
