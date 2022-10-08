const tailwind = require('tailwindcss');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [tailwind('./tailwind.config,js'), require('autoprefixer')],
};
