/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#242424",
        secondary: "#ecc94b",
        // ...
      },
      animation: {
        "text-slide-2": "text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-3": "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-4": "text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-5": "text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-6": "text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-7": "text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "text-slide-8": "text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {},
    },
  },
  plugins: [],
};
