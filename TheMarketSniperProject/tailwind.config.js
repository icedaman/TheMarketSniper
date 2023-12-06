/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: 'fadeOut 1.5s ease-in-out',
        fade2: 'fadeOut 2s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          // '0%': { backgroundColor: theme('colors.red.300') },
          // '100%': { backgroundColor: theme('colors.amber.300') },
          '0%': {opacity: '0'},
          '100%': {opacity: '100'}
        },
      }),

      // keyframes:{
      //   'trans-right':{
      //     '0%, 100%': { transform: 'translateX(10px)'},
      //     '50%': { transform: 'translateX(0)'}
      //   }
      // },
      // animation:{
      //   'trans-right': 'trans-right 1.5s ease-in-out infinite'
      // }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

