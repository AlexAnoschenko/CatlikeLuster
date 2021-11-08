import { IDictionary } from './types';

const setLanguage = (lang: string): IDictionary => {
    switch (lang) {
        case 'en':
            return {
                main: 'MAIN',
                parents: 'PARENTS',
                kittens: 'KITTENS',
                gallery: 'GALLERY',
                info: 'INFO',
                contacts: 'CONTACTS',
            };

        case 'ru':
            return {
                main: 'ГЛАВНАЯ',
                parents: 'РОДИТЕЛИ',
                kittens: 'КОТЯТА',
                gallery: 'ГАЛЕРЕЯ',
                info: 'ИНФО',
                contacts: 'КОНТАКТЫ',
            };

        default:
            return {
                main: 'MAIN',
                parents: 'PARENTS',
                kittens: 'KITTENS',
                gallery: 'GALLERY',
                info: 'INFO',
                contacts: 'CONTACTS',
            };
    }
};

export default setLanguage;
