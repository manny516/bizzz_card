module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*/*.{js,ts,jsx.tsx}'
  ],
  theme: {
     extend: {
      container: {
        center:true,
        padding : '2rem',
      },
      colors : {
        'primary' : '#5B21B6',
      }
    },
  },
  plugins: [],
}
