module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#E60012',
        thirdColor: '#484848',
      },
      boxShadow: {
        primary: 'rgb(60 64 89 / 15%) 0px 4px 16px 0px',
      },
      screens: {
        'gt-1440': '1440px',
      },
      animation: {
        'light-heart': 'lightHeart 0.75s  linear',
        'header-tb-move': 'moveHeaderTablet 0.3s linear',
        'header-tb-close': 'closeHeaderTablet 0.3s linear',
        'header-tb-login-move': 'moveLoginHeaderTablet 0.3s linear',
        'header-tb-login-close': 'closeLoginHeaderTablet 0.3s linear',
      },
      keyframes: {
        lightHeart: {
          '0%': { width: 0 },
          '25%': { width: '6px' },
          '50%': { width: '6px' },
          '75%': { width: '6px' },
          '100%': { width: 0 },
        },
        moveHeaderTablet: {
          '0%': { height: '0' },
          '25%': { height: '10vh' },
          '50%': { height: '20vh' },
          '75%': { height: '40vh' },
          '100%': { height: '60vh' },
        },
        closeHeaderTablet: {
          '0%': { height: '60vh' },
          '25%': { height: '40vh' },
          '50%': { height: '20vh' },
          '75%': { height: '10vh' },
          '100%': { height: '0' },
        },
        moveLoginHeaderTablet: {
          '0%': { height: '0' },
          '25%': { height: '20vh' },
          '50%': { height: '40vh' },
          '75%': { height: '60vh' },
          '100%': { height: '80vh' },
        },
        closeLoginHeaderTablet: {
          '0%': { height: '80vh' },
          '25%': { height: '60vh' },
          '50%': { height: '40vh' },
          '75%': { height: '20vh' },
          '100%': { height: '0' },
        },
      },
    },
  },
  plugins: [],
};
