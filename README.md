🚀 JoseStore – Modern React E-Commerce Frontend
<p align="center"> <img src="https://img.shields.io/badge/React-v18.2.0-61DAFB?logo=react&style=for-the-badge" /> <img src="https://img.shields.io/badge/TailwindCSS-v3.4-blue?logo=tailwindcss&style=for-the-badge" /> <img src="https://img.shields.io/badge/Framer_Motion-Animations-purple?logo=framer&style=for-the-badge" /> <img src="https://img.shields.io/badge/Status-Production_Ready-success?style=for-the-badge" /> </p>

A high-quality, production-grade, fully responsive E-Commerce frontend built with
React + Tailwind CSS + Framer Motion + Context API.

This project focuses on clean UI, smooth UX, modern animations, and real-world e-commerce functionalities, including cart system, checkout page, transitions, routing, and more.

✨ Features
🛒 E-Commerce Core

Modern product grid layout

Product details with large preview

Add to cart / remove / update quantity

Animated cart drawer

Persistent cart state

Checkout with input validation

Order success popup

Real-time price calculation

Dark Mode support

🎨 UI / UX Experience

Clean minimalist design

Gradient backgrounds

Soft shadows + glassmorphism

Smooth page transitions

Framer Motion animations

HD image cards

Responsive up to 320px screens

Beautiful Navbar + Footer

🧰 Integrations

EmailJS contact form

React Toastify notifications

React Router DOM v6

TailwindCSS utility styling

Framer Motion for interactions

Context API for global state

🛠️ Tech Stack
Category	Tools
Frontend Framework	React.js
UI Styling	Tailwind CSS
Animation Library	Framer Motion
State Management	Context API
Notifications	React Toastify
Email Handling	EmailJS
Deployment	GitHub Pages / Vercel
📁 Project Structure
src/
│── assets/            → images, icons
│── components/        → Navbar, Footer, CartDrawer, ProductCard
│── context/           → CartContext, CartProvider
│── pages/             → Home, Products, ProductDetail, Cart, Checkout, Contact
│── hooks/             → custom hooks
│── App.js
│── index.js
│── index.css
│── App.css

⚙️ Installation & Setup
1️⃣ Clone the Repo
git clone https://github.com/josephstevenit-alt/Josestore-frontend-project.git
cd Josestore-frontend-project

2️⃣ Install dependencies
npm install

3️⃣ Start the local server
npm start


Your app runs at → http://localhost:3000

🏗️ Build for Production
npm run build

📧 EmailJS Integration (Contact Page)

Go to ➝ https://www.emailjs.com

Create a Service ID

Create a Template ID

Copy your Public Key

Replace inside Contact.jsx:

const serviceID = "YOUR_SERVICE_ID";
const templateID = "YOUR_TEMPLATE_ID";
const publicKey = "YOUR_PUBLIC_KEY";

🌍 Deployment
🔹 Deploy on GitHub Pages

Install:

npm install gh-pages --save-dev


Add to package.json:

"homepage": "https://your-username.github.io/Josestore-frontend-project",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}


Deploy:

npm run deploy

🔹 Deploy on Vercel
vercel

🖼️ Screenshots

(Add your real screenshots inside assets/screenshots/)

🏠 Home Page

![Home](assets/screenshots/home.png)

🛍️ Product Listing

![Products](assets/screenshots/products.png)

🛒 Cart Drawer

![Cart](assets/screenshots/cart.png)

📦 Checkout Page

![Checkout](assets/screenshots/checkout.png)

🤝 Contributing

Contributions are welcome!

Fork the repo

Create a feature branch

Commit & push

Open a Pull Request

📜 License

This project is licensed under the MIT License.

👨‍💻 Author – Joseph Steven

📍 Tirupathur, Tamil Nadu, India
📧 josephstevenit@gmail.com

🐙 GitHub: https://github.com/josephstevenit-alt

⭐ Support the Project

If you find this project useful, please give it a star ⭐ on GitHub.
It motivates further development and helps others discover the project!
