import type { Config } from "tailwindcss";

export default {
  darkMode: ['class', '[class~="angel-mode"]', '[class~"void-mode"]'] as any,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        jetbrains: ['var(--font-jetbrains)'],
        source_code: ['var(--font-source_code)']
      }
    },
  },
  plugins: [],
} satisfies Config;
