/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        'line-through-animation': {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
      },
      animation: {
        'line-through': 'line-through-animation 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}