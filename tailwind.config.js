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
        'gray': 'hsl(231, 7%, 60%)',
        'tomato': 'hsl(4, 100%, 67%)'
      },
      colors: {
        'slate-gray': 'hsl(234, 29%, 20%)',
        'gray': 'hsl(231, 7%, 60%)',
        'tomato': 'hsl(4, 100%, 67%)'
      },
      borderColor: {
        'gray': '#9ca3c1',
      },
      screens: {
        'desk': '700px',
      },
    },
  },
  plugins: [],
}

