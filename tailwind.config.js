module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme,
        header: '#e7e7e7',
        'bg-pages': '#F0F2F5',
      }),
      textColor: {
        'menu-button': '#9acd32',
        'menu-active': '#c6e92c',
      },
      fontSize: {
        'sub-title': '19.2px',
      },
      spacing: {
        '15vh': '15vh',
        '64px': '64px',
        '50px': '50px',
        '20%': '20%',
      },
      minHeight: {
        content: 'calc(100vh - 64px)',
      },
      minWidth: {},
      height: {
        header: '64px',
      },
      width: {
        logo: '250px',
        'sub-title': '330px',
        'contact-icon': '50px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
};
