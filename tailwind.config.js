/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#F5E6D3',
        maroon: '#800020',
        gold: '#D4AF37',
      },
      boxShadow: {
        premium: '0 18px 45px rgba(128, 0, 32, 0.12), 0 6px 18px rgba(0,0,0,0.06)',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

