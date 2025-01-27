import { heroui } from "@heroui/theme";
import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|toggle|ripple|spinner|form).js",
    "./node_modules/@heroui/theme/dist/components/(radio|select|form|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        gray: "var(--background-gray)",
        "gray-second": "#e8e8e8",
        "gray-dark": "var(--background-gray-dark)",
        foreground: "var(--foreground)",
        backdrop: "var(--backdrop)",
        green: "#1B5441",
        yellow: "#ffd301",
      },
      boxShadow: {
        plain: "0 0 25px -5px rgb(0 0 0 / 0.1)",
      },
      fontSize: {
        sm: "0.75rem",
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
    heroui(),
  ],
} satisfies Config;
