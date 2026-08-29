# Assignment Help — College Assignment Writing Website

A fast, responsive, and modern one-page landing website for **Assignment Help**, a college assignment writing assistance service at ₹5 per page.

Built strictly with **Semantic HTML5, Vanilla CSS3, and Vanilla JavaScript** — zero backend dependencies, zero build steps, and zero frameworks.

---

## 🚀 Features

- **Modern & Clean Design**: Dark navy primary theme, crisp white cards, golden yellow CTA buttons, and student-friendly pastel accents.
- **Centralized Google Form Integration**: All "Place Your Request" CTA buttons connect to a single central variable in `script.js`.
- **Transparent Pricing Breakdown**: Clear ₹5 per page pricing with calculation samples (10, 20, 30, and 50 pages).
- **Checklist of Requirements**: Clearly guides students on details required (Name, College, Subject, File upload, etc.).
- **Interactive 4-Step Process**: Explains the submission and delivery flow from start to finish.
- **Fully Responsive**: Optimized for desktop (1440px), laptops (1024px), tablets (768px), and mobile devices (480px / 375px).
- **Accessible & Lightweight**: Fast load times, semantic HTML tags, keyboard navigation, and mobile hamburger drawer.

---

## 📁 Project Structure

```text
assignment-help/
├── index.html       # Semantic HTML5 layout & structure
├── style.css        # CSS variables, typography, animations & responsive styling
├── script.js        # Form link configuration, mobile menu & scroll interactions
└── README.md        # Project guide & deployment instructions
```

---

## 🔗 How to Change the Google Form URL

You can change the request form destination across the entire website by updating just **ONE line** in `script.js`:

1. Open `script.js`.
2. Locate the first line at the top:
   ```javascript
   const GOOGLE_FORM_URL = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";
   ```
3. Replace `"https://forms.gle/YOUR_GOOGLE_FORM_LINK"` with your real Google Form URL.
4. Save the file. Every "Place Your Request" button will immediately link to your new Google Form!

---

## 💻 How to Run Locally

Since this is a 100% static website, you do not need Node.js or any local server.

### Option 1: Direct Browser Open
Double-click `index.html` (or right-click → **Open with** → Chrome/Edge/Firefox).

### Option 2: Live Server (VS Code / Antigravity)
1. Open the project folder in your editor.
2. If using the **Live Server** extension, right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 How to Deploy

### Deploying to GitHub Pages (Free)

1. Create a new repository on GitHub (e.g., `assignment-help`).
2. Push your project files (`index.html`, `style.css`, `script.js`, `README.md`) to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Assignment Help website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/assignment-help.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings** → **Pages** (in the left sidebar).
4. Under **Branch**, select `main` and `/ (root)` folder, then click **Save**.
5. Your website will be live at: `https://YOUR_USERNAME.github.io/assignment-help/`

---

### Deploying to Vercel (Free)

#### Via Vercel Web Dashboard:
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Import your GitHub repository.
4. Leave the default settings (Framework Preset: **Other**) and click **Deploy**.

#### Via Vercel CLI:
1. Open your terminal in the project directory.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the quick prompts to deploy immediately.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3**: Modern Flexbox, CSS Grid, Custom Properties (Variables), Media Queries.
- **JavaScript (ES6+)**: Vanilla DOM manipulation, IntersectionObserver, and window handling.
- **Google Fonts**: Inter & Plus Jakarta Sans.

---

## 📄 License & Copyright

&copy; 2026 Assignment Help. All rights reserved.
