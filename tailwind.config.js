/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': { 'max': '550px' },
        'tablet': { 'max': '768px' },
        'laptop': { 'max': '1024px' },
        'desktop': { 'max': '1200px' },

      },
        backgroundImage: {
    goldGradient: 'linear-gradient(148.88deg, #FFCC66 25.71%, #997A3D 69.65%)',
  },
    },
  },
  plugins: [],
}

