module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme,
        header: '#e7e7e7',
        'bg-pages': '#FFF',
        'back-button': '#E58E37',
      }),
      textColor: {
        'menu-button': '#9acd32',
        'menu-active': '#E58E37',
      },
      fontSize: {
        'sub-title': '19.2px',
      },
      spacing: {
        '15vh': '15vh',
        '240px': '240px',
        '64px': '64px',
        '50px': '50px',
        '10px': '10px',
        '50%': '50%',
        '20%': '20%',
      },
      minHeight: {
        content: 'calc(100vh - 64px)',
      },
      minWidth: {},
      height: {
        'parent-card': '300px',
        header: '64px',
      },
      width: {
        logo: '250px',
        'sub-title': '330px',
        'parent-card': '270px',
        'contact-icon': '50px',
        'language-icon': '40px',
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
