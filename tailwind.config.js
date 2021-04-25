module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.5s',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(4px, 0px)' },
          '10%': { transform: 'translate(-4px, 0px) rotate(-2deg)' },
          '20%': { transform: 'translate(4px, 0px) rotate(2deg)' },
          '30%': { transform: 'translate(-4px, 0px) rotate(0deg)' },
          '40%': { transform: 'translate(4px, 0px) rotate(2deg)' },
          '50%': { transform: 'translate(-4px, 0px) rotate(-2deg)' },
          '60%': { transform: 'translate(4px, 0px) rotate(0deg)' },
          '70%': { transform: 'translate(-4px, 0px) rotate(-2deg)' },
          '80%': { transform: 'translate(4px, 0px) rotate(2deg)' },
          '90%': { transform: 'translate(-4px, 0px) rotate(0deg)' },
          '100%': { transform: 'translate(4px, 0px) rotate(-2deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
