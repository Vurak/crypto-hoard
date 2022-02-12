module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Trade Winds']
      },
      padding: {
        '1/3': '33.33%',
        '1/2': '50%',
        full: '100%',
      },
      colors: {
        purple: {
          1000: '#280942',
          1200: '#14052C',
          1300: '#0F021B'
        },
        primary: {
          light: '#310E56',
          dark: '#14052C',
        },
        gold: {
          50: '#eab308'
        }
      }
    },
  },
  plugins: [],
}
