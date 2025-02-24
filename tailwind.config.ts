import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F3A93',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat-alternates)"],
      },
      backgroundImage: {
        hero: "url('/images/hero.jpg')",
        howitworks: "url('/images/howitworks.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
