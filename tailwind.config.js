module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Saira']
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
          accent: '#2C3580',
          light: '#181E51',
          dark: '#0F0C1D',
        },
        gold: {
          50: '#eab308'
        }
      }
    },
  },
  plugins: [],
}
