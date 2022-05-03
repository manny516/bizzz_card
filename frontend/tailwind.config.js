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
        'grey-blue' : '#F2F2FB',
        'grey-purple' : '#5B608A'
      }
    },
  },
  plugins: [],
}
