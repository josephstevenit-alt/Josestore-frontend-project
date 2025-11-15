/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },

    extend: {
      colors: {
        primary: "#2563eb",     // blue-600
        secondary: "#1e40af",   // blue-900
        light: "#f8fafc",       // slate-50
        dark: "#0f172a",        // slate-900
        accent: "#f97316",      // orange-500
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        hero: "url('./src/assets/hero-bg.jpg')",
      },

      boxShadow: {
        card: "0 4px 14px rgba(0,0,0,0.08)",
        soft: "0 2px 8px rgba(0,0,0,0.06)",
      },

      animation: {
        fade: "fadeIn 0.8s ease-in-out",
        slide: "slideUp 0.8s ease",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },

  plugins: [],
};
