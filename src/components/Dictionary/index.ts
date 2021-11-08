const setLanguage = (lang: string) => {
    switch (lang) {
        case 'en':
            return {
                main: 'MAIN',
                parents: 'PARENTS',
                kitten: 'KITTEN',
                gallery: 'GALLERY',
                info: 'INFO',
                contacts: 'CONTACTS',
            };

        case 'ru':
            return {
                main: 'ГЛАВНАЯ',
                parents: 'РОДИТЕЛИ',
                kitten: 'КОТЯТА',
                gallery: 'ГАЛЕРЕЯ',
                info: 'ИНФО',
                contacts: 'КОНТАКТЫ',
            };

        default:
            return {};
    }
};

export default setLanguage;
