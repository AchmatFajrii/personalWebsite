/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(353, 100%, 65%)',
        'secondary' : 'hsl(244, 24%, 26%)',
        'third' : 'hsl(244, 16%, 43%)',
        'fourth' : 'hsl(258, 60%, 98%)',
        'five' :  '#fff'
      },
      fontFamily: {
        'rubik': 'Rubik',
      },
      fontSize: {
        'h1-size' : '2.25rem',
        'h2-size' : '1.5rem',
        'h3-size' : '1.25rem',
        'normal-size' : '1rem',
        'small-size' : '0.875rem',
        'smaller-size' : '0.813rem'
      },
      fontWeight: {
        medium : '500',
        semibold : '600',
        bold : '700'
      },
    },
  },
  plugins: [],
}

