/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1630',
        deepNavy: '#101F3D',
        royalGold: '#C9A45C',
        ivory: '#F7F5F0',
        mutedGrey: '#8A94A6'
      },
      boxShadow: {
        card: '0 18px 50px -20px rgba(10, 23, 45, 0.45)'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
