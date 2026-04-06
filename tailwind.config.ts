import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF5F0",
          dark: "#FDF8F5",
        },
        blush: {
          light: "#FAD4DC",
          DEFAULT: "#F4A7B9",
          primary: "#E8637A",
          deep: "#C94B65",
        },
        rosegold: {
          light: "#E8C4A0",
          DEFAULT: "#C4956A",
          dark: "#A07040",
        },
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #E8637A 0%, #C4956A 50%, #F4A7B9 100%)",
        "gradient-hero": "linear-gradient(180deg, #FFF5F0 0%, #FDF0EC 100%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(255,245,240,0.9), rgba(244,167,185,0.15))",
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(232, 99, 122, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
        glow: "0 0 40px rgba(232, 99, 122, 0.25)",
        card: "0 4px 24px rgba(196, 149, 106, 0.15)",
        "card-hover": "0 16px 48px rgba(232, 99, 122, 0.25)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        sparkle: "sparkle 2.5s ease-in-out infinite",
        "slide-down": "slideDown 0.4s ease-out",
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.4", transform: "scale(0.8) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1.2) rotate(180deg)" },
        },
        slideDown: {
          from: { transform: "translateY(-100%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        fadeUp: {
          from: { transform: "translateY(24px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
