import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: "var(--pink)",
        red: "var(--red)",
        blue: "var(--blue)",
        "off-navy-blue": "var(--off-navy-blue)",
        "navy-blue": "var(--navy-blue)",
        "sky-blue": "var(--sky-blue)",
        "pantone-purple": "var(--pantone-purple)",
        purple: "var(--purple)",
        "off-purple": "var(--off-purple)",
      },
      strokeWidth: {
        '1.5': "1.5px",
      }
    },
  },
  plugins: [],
} satisfies Config;
