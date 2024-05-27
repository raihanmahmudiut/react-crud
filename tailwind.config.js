/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#1e3a8a',
          800: '#1c3d5a',
          900: '#172a46',
        },
      },
    },
  },
  plugins: [],
}

