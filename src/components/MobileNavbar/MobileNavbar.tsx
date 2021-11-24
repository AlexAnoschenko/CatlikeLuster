import { Col, Row } from 'antd';
import { slide as Menu } from 'react-burger-menu';

import { useMobileNavigator } from './hooks/useMobileNavbar';
import { RouteName } from '../../constants';

const MobileNavbar = (props: any) => {
  const { language, dict, selectLanguage } = useMobileNavigator();

  return (
    <div>
      <Menu {...props}>
        <Row className='flex focus:outline-none' gutter={20}>
          <Col className='w-max'>
            <img
              src='https://i.ibb.co/DtbwYzn/en.png'
              alt='en'
              className={`cursor-pointer w-language-icon ${
                language === 'en' &&
                'border-2 border-indigo-600 rounded-full'
              }`}
              onClick={() => selectLanguage('en')}
            />
          </Col>
          <Col className='w-max'>
            <img
              src='https://i.ibb.co/GdRBgGh/ru.png'
              alt='ru'
              className={`cursor-pointer w-language-icon ${
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
