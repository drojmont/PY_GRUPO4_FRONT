const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jet: '#353535',
        'dark-slate-gray': '#395253',
        'caribean-current': '#3C6E71',
        'ash-gray': '#9EB7B8',
        'custom-white': '#FFFFFF',
        'anti-flash-white': '#ECECEC',
        'platinum-one': '#E3E3E3',
        'platinum-two': '#D9D9D9',
        'cadet-gray': '#81929E',
        'indigo-dye': '#284B63',
      },
    },
  },
  plugins: [],
});
