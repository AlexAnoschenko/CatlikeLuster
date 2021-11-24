import { FC } from 'react';
import { Col, Layout, Row } from 'antd';
import { Link } from 'react-router-dom';

import MobileNavbar from '../MobileNavbar/MobileNavbar';
import { useNavbar } from './hooks/useNavBar';
import { RouteName } from '../../constants';

const Navbar: FC = () => {
  const {
    selectedPage,
    selectPage,
    dict,
    language,
    isMobile,
    selectLanguage,
  } = useNavbar();

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <Layout.Header className='fixed z-50 w-screen h-header bg-header'>
          <Row
            className='h-full'
            align='middle'
            justify='space-between'
          >
            <Link
              className='cursor-pointer'
              to={RouteName.LANDING_PAGE}
              onClick={() => selectPage(RouteName.LANDING_PAGE)}
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
                    onClick={() => selectPage(RouteName.LANDING_PAGE)}
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
                    onClick={() => selectPage(RouteName.PARENTS_PAGE)}
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
                    onClick={() => selectPage(RouteName.KITTENS_PAGE)}
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
                    onClick={() => selectPage(RouteName.GALLERY_PAGE)}
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
                    onClick={() => selectPage(RouteName.INFO_PAGE)}
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
                      selectPage(RouteName.CONTACTS_PAGE)
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
      )}
    </>
  );
};

export default Navbar;
