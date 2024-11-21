// @type {import('tailwindcss').Config}
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-pattern': "url('../assets/images/bg-wrapper.jpg')",
      },
      colors: {
        custom50: '#f8fbf6', 
        custom100: '#e1f6d1', 
        custom200: '#c5eda9', 
        custom300: '#a2e07a', 
        custom400: '#7dcf4c', 
        custom500: '#5fb42e', 
        custom600: '#478f21', 
        custom700: '#376e1d', 
        custom800: '#30571d', 
        custom900: '#2a4b1c', 
        custom950: '#13290a', 
      },
    },
    
  },
  plugins: [require('tailwindcss-animated')],
}
