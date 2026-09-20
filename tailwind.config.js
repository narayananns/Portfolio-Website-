/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.10)",
        lift: "0 8px 16px -6px rgba(15,23,42,0.10), 0 24px 48px -16px rgba(15,23,42,0.18)",
        glow: "0 0 0 1px rgba(59,130,246,0.18), 0 12px 40px -12px rgba(59,130,246,0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(24px,-36px) scale(1.08)" },
          "66%": { transform: "translate(-20px,20px) scale(0.94)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        caret: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        equalise: {
          "0%, 100%": { height: "30%" },
          "50%": { height: "100%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 18s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        caret: "caret 1s step-end infinite",
        equalise: "equalise 0.9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
