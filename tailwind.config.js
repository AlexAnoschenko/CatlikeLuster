module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                ...theme,
                header: '#e7e7e7',
            }),
            textColor: {
                'menu-button': '#9acd32',
                'menu-active': '#c6e92c',
            },
            fontSize: {
                'sub-title': '19.4px',
            },
            spacing: {
                '15vh': '15vh',
            },
            minHeight: {
                content: 'calc(100vh - 160px)',
            },
            minWidth: {},
            height: {
                header: '64px',
            },
            width: {
                logo: '200px',
                'sub-title': '330px',
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
