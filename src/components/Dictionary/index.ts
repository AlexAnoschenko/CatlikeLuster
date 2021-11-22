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
        contactsText:
          'Delivery of kittens is possible anywhere in the world, please specify the delivery price and any other questions in the way.',
        kittensForSale: 'FOR SALE',
        kittensSold: 'SOLD',
      };

    case 'ru':
      return {
        main: 'ГЛАВНАЯ',
        parents: 'РОДИТЕЛИ',
        kittens: 'КОТЯТА',
        gallery: 'ГАЛЕРЕЯ',
        info: 'ИНФО',
        contacts: 'КОНТАКТЫ',
        contactsText:
          'Доставка котят возможна в любую точку мира, пожалуйста, уточняйте стоимость доставки и любые другие вопросы.',
        kittensForSale: 'НА ПРОДАЖУ',
        kittensSold: 'ПРОДАНЫ',
      };

    default:
      return {
        main: 'MAIN',
        parents: 'PARENTS',
        kittens: 'KITTENS',
        gallery: 'GALLERY',
        info: 'INFO',
        contacts: 'CONTACTS',
        contactsText:
          'Delivery of kittens is possible anywhere in the world, please specify the delivery price and any other questions in the way.',
        kittensForSale: 'FOR SALE',
        kittensSold: 'SOLD',
      };
  }
};

export default setLanguage;
