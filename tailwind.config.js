/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'slate-gray': 'hsl(234, 29%, 20%)',
      },
    },
  },
  plugins: [],
}

