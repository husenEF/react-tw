/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      width: '100%',
      maxWidth: '100%',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
