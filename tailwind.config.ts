import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|toggle|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        gray: "var(--background-gray)",
        foreground: "var(--foreground)",
        backdrop: "var(--backdrop)",
        green: "#1B5441",
      },
      boxShadow: {
        plain: "0 0 25px -5px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          // ...
          colors: {
            secondary: { DEFAULT: "#1B5441" },
            primary: { DEFAULT: "#f2f2f2", foreground: "#000" },
          },
          layout: {
            radius: { small: "0.3rem", medium: "0.3rem" },
          },
        },
      },
    }),
  ],
} satisfies Config;
