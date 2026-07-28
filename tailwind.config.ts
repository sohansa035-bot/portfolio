import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        card: "var(--card)",
        accent: {
          DEFAULT: "var(--primary-accent)",
          secondary: "var(--secondary-accent)"
        },
        text: {
          main: "var(--text-main)",
          muted: "var(--text-muted)",
        },
        success: "var(--success)"
      },
    },
  },
  plugins: [],
} satisfies Config;
