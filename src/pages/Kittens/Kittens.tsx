import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

import CardDefault from '../../components/CardDefault/CardDefault';

const Kittens: FC = () => {
  return (
    <div className='flex justify-center bg-bg-pages min-h-content page px-50px pt-60'>
      <Row gutter={[70, 40]}>
        <Col>
          <Link to='/kittens/for-sale'>
            <CardDefault
              image='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/prostye-risunki-dlya-srisovki-23.jpg'
              title='FOR SALE'
            />
          </Link>
        </Col>
        <Col>
          <Link to='/kittens/sold'>
            <CardDefault
              image='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/prostye-risunki-dlya-srisovki-23.jpg'
              title='SOLD'
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Kittens;
