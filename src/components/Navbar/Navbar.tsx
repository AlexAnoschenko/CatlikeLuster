import { Col, Layout, Row } from 'antd';
import { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../Dictionary/index';
import { useActions } from '../../hooks/useActions';
import { LocalStorage, RouteName } from '../../constants';

const Navbar: FC = () => {
  const router = useHistory();
  const { pathname } = router.location;
  const [selectedPage, setSelectedPage] = useState(pathname);
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);
  const { setLang } = useActions();

  const selectLanguage = (lang: string) => {
    setLang(lang);
    localStorage.setItem(LocalStorage.LANGUAGE, lang);
  };

  return (
    <Layout.Header className='fixed z-50 w-screen h-header bg-header'>
      <Row className='h-full' align='middle' justify='space-between'>
        <Link
          className='cursor-pointer'
          to={RouteName.LANDING_PAGE}
          onClick={() => setSelectedPage(RouteName.LANDING_PAGE)}
        >
          <img
            src='https://i.ibb.co/bXW5r21/logo.png'
            alt='logo'
            className='w-logo'
          />
        </Link>

        <div className='flex gap-x-10'>
          <Row gutter={30} className='text-lg select-none nunito'>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.LANDING_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.LANDING_PAGE}
                onClick={() =>
                  setSelectedPage(RouteName.LANDING_PAGE)
                }
              >
                {dict.main}
              </Link>
            </Col>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.PARENTS_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.PARENTS_PAGE}
                onClick={() =>
                  setSelectedPage(RouteName.PARENTS_PAGE)
                }
              >
                {dict.parents}
              </Link>
            </Col>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.KITTENS_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.KITTENS_PAGE}
                onClick={() =>
                  setSelectedPage(RouteName.KITTENS_PAGE)
                }
              >
                {dict.kittens}
              </Link>
            </Col>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.GALLERY_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.GALLERY_PAGE}
                onClick={() =>
                  setSelectedPage(RouteName.GALLERY_PAGE)
                }
              >
                {dict.gallery}
              </Link>
            </Col>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.INFO_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.INFO_PAGE}
                onClick={() => setSelectedPage(RouteName.INFO_PAGE)}
              >
                {dict.info}
              </Link>
            </Col>
            <Col>
              <Link
                className={`cursor-pointer ${
                  selectedPage === RouteName.CONTACTS_PAGE &&
                  'border-b-2 border-black text-menu-active'
                }`}
                to={RouteName.CONTACTS_PAGE}
                onClick={() =>
                  setSelectedPage(RouteName.CONTACTS_PAGE)
                }
              >
                {dict.contacts}
              </Link>
            </Col>
          </Row>

          <Row gutter={10}>
            <Col>
              <img
                src='https://i.ibb.co/DtbwYzn/en.png'
                alt='en'
                className={`cursor-pointer w-7 ${
                  language === 'en' &&
                  'border-2 border-indigo-600 rounded-full'
                }`}
                onClick={() => selectLanguage('en')}
              />
            </Col>
            <Col>
              <img
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
        </div>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
