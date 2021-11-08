import { Col, Layout, Row } from 'antd';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <Layout.Header className='h-header bg-header'>
      <Row className='h-full' align='middle' justify='space-between'>
        <img
          src='https://i.ibb.co/bXW5r21/logo.png'
          alt='logo'
          className='w-logo'
        />
        <Row
          gutter={30}
          className='text-lg cursor-pointer select-none nunito'
        >
          <Col className='text-menu-button active:text-menu-active'>
            MAIN
          </Col>
          <Col className='hover:text-menu-button active:text-menu-active'>
            PARENTS
          </Col>
          <Col className='hover:text-menu-button active:text-menu-active'>
            KITTEN
          </Col>
          <Col className='hover:text-menu-button active:text-menu-active'>
            GALLERY
          </Col>
          <Col className='hover:text-menu-button active:text-menu-active'>
            INFO
          </Col>
          <Col className='hover:text-menu-button active:text-menu-active'>
            CONTACTS
          </Col>
        </Row>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
