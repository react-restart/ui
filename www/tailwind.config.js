const primary = {
  100: '#EEDBF5',
  200: '#DBB2EB',
  300: '#C88AE0',
  400: '#B562D5',
  500: '#A13ACB',
  600: '#832CA5',
  700: '#63217D',
  800: '#431655',
  900: '#230C2C',
};

module.exports = {
  mode: 'jit',
  purge: ['./docs/**/*.{js,ts,tsx,mdx}', './src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...primary,
          DEFAULT: primary[500],
        },
        accent: primary['800'],
        subtle: primary['100'],
      },
    },
  },
};
