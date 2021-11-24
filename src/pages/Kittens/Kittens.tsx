import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

import CardDefault from '../../components/CardDefault/CardDefault';
import { useKittens } from './hooks/useKittens';

const Kittens: FC = () => {
  const { dict, isMobile } = useKittens();

  return (
    <div
      className={`flex justify-center bg-bg-pages min-h-content page px-50px ${
        isMobile && 'pt-50px pb-50px h-full'
      }`}
    >
      <Row
        gutter={[70, 40]}
        className='flex items-center justify-center'
      >
        <Col style={{ height: 277 }}>
          <Link to='/kittens/for-sale'>
            <CardDefault
              image='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/prostye-risunki-dlya-srisovki-23.jpg'
              title={dict.kittensForSale}
            />
          </Link>
        </Col>
        <Col style={{ height: 277 }}>
          <Link to='/kittens/sold'>
            <CardDefault
              image='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/prostye-risunki-dlya-srisovki-23.jpg'
              title={dict.kittensSold}
            />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Kittens;
