module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './pages/*.{js,ts,jsx,tsx}',
    './components/**/*/*.{js,ts,jsx.tsx}',
    './styles/*.css'
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
