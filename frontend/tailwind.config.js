/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify all files where Tailwind classes will be used
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // Extend the default Tailwind theme for custom designs
      colors: {
        primary: {
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
      },
      spacing: {
        128: "32rem", // Example of custom spacing
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Customize font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Form styling plugin
    require('@tailwindcss/typography'), // Typography plugin for content
  ],
};

