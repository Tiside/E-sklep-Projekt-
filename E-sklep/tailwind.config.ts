import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  safelist: [
    "bx", "bxs-heart", "bxs-user", "bx-cart", "bxl-instagram" // иконки, которые используешь
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        title: ["Anton", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
} satisfies Config;
