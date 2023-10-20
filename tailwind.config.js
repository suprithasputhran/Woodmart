const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        avocado:'#5e7854',
        bg_primary :'#e0d4c3',
        maroon:'#d98366'
        // bg_secondary:'#668c68',
      },
    },
   
    fontFamily:{
      Alexbrush: ['Alex Brush', 'cursive'],
      Aleo:[ 'Aleo', 'serif'],
      Cormorantupright:[ 'Cormorant Upright', 'serif'],
      PTsans: ['PT Sans', 'sans-serif'],
      Lexend: ['Lexend', 'sans-serif']
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      'sm': {'min':'375px', 'max':'424px'},
     'md': {'min':'425px','max':'767px'},
      'lg': {'min':'768px','max':'1279px'},
      'xl': {'min':'1280px','max':'1535px'},
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}


