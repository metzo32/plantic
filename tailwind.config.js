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
      colors: {
        custom50: '#f8fbf6', 
        custom100: '#e1f6d1', 
        custom200: '#c5eda9', 
        custom300: '#a2e07a', 
        custom400: '#7dcf4c', 
        custom500: '#478f21', 
        // custom600: '#478f21', 
        custom700: '#376e1d', 
        custom800: '#30571d', 
        custom900: '#2a4b1c', 
        custom950: '#13290a',

        customPoint: '#F8FBC8',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(125deg, rgba(237,255,224,1) 0%, rgba(197,237,169,1) 22%, rgba(220,247,200,1) 100%)',
        'card-gradient': 'radial-gradient(circle, rgba(248,251,246,0.5) 50%, rgba(198,232,174,0.2) 100%)',
      },
      boxShadow: {
        'custom-green': '2px 3px 6px rgba(55, 110, 29, 0.3)', // 초록색 그림자
      },

    },
    
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
  
}
