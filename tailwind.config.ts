
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1380px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        orbitron: ["Orbitron", "Cinzel", "sans-serif"],
        sans: ["Inter", "Poppins", "sans-serif"],
      },
      colors: {
        "brand-bg": "#101726",
        "brand-card": "rgba(24,36,51,0.8)",
        "brand-accent": "#20e3b2",
        "brand-accent2": "#6e99ff",
        "brand-accent3": "#f2d463",
        "brand-glass": "rgba(255,255,255,0.10)",
        "brand-glass-border": "rgba(255,255,255,0.18)",
        "brand-danger": "#fd5376",
        "brand-text": "#fafafa",
        "brand-text-secondary": "#d5dde7",
        "brand-shadow": "0 8px 32px 0 rgba(16,24,38,0.11)",
      },
      borderRadius: {
        xl: "2em",
        lg: "1.3em",
        md: "0.75em",
      },
      boxShadow: {
        brand: "0 8px 32px 0 rgba(16,24,38,0.15), 0 2px 8px 0 rgba(16,39,54,0.12)",
      },
      animation: {
        "fade-in": "fade-in 0.4s cubic-bezier(0.55,0,0.2,1)",
        "scale-in": "scale-in 0.3s cubic-bezier(0.5,0.1,0.2,1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

