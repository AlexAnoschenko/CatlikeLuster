import { Col, Row } from 'antd';
import { slide as Menu } from 'react-burger-menu';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../Dictionary';
import { LocalStorage, RouteName } from '../../constants';
import { useActions } from '../../hooks/useActions';

const MobileNavbar = (props: any) => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);
  const { setLang } = useActions();

  const selectLanguage = (lang: string) => {
    setLang(lang);
    localStorage.setItem(LocalStorage.LANGUAGE, lang);
  };

  return (
    <div className=''>
      <Menu {...props}>
        <Row tabIndex={-1} gutter={20} style={{ display: 'flex' }}>
          <Col className='w-max'>
            <img
              style={{ width: 40 }}
              src='https://i.ibb.co/DtbwYzn/en.png'
              alt='en'
              className={`cursor-pointer w-7 ${
                language === 'en' &&
                'border-2 border-indigo-600 rounded-full'
              }`}
              onClick={() => selectLanguage('en')}
            />
          </Col>
          <Col className='w-max'>
            <img
              style={{ width: 40 }}
              src='https://i.ibb.co/GdRBgGh/ru.png'
              alt='ru'
              className={`cursor-pointer w-7 ${
                language === 'ru' &&
                'border-2 border-indigo-600 rounded-full'
              }`}
              onClick={() => selectLanguage('ru')}
            />
          </Col>
        </Row>

        <a className='menu-item' href={RouteName.LANDING_PAGE}>
          {dict.main}
        </a>

        <a className='menu-item' href={RouteName.PARENTS_PAGE}>
          {dict.parents}
        </a>

        <a className='menu-item' href={RouteName.KITTENS_PAGE}>
          {dict.kittens}
        </a>

        <a className='menu-item' href={RouteName.GALLERY_PAGE}>
          {dict.gallery}
        </a>

        <a className='menu-item' href={RouteName.INFO_PAGE}>
          {dict.info}
        </a>

        <a className='menu-item' href={RouteName.CONTACTS_PAGE}>
          {dict.contacts}
        </a>
      </Menu>
    </div>
  );
};

export default MobileNavbar;
