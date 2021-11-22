import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

import CardDefault from '../../components/CardDefault/CardDefault';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../../components/Dictionary';

const Kittens: FC = () => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1299px)',
  });

  return (
    <div
      className={`flex justify-center bg-bg-pages min-h-content page px-50px ${
        isTabletOrMobile ? 'pt-50px pb-50px h-full' : 'pt-60'
      }`}
    >
      <Row gutter={[70, 40]} className='flex justify-center'>
        <Col>
          <Link to='/kittens/for-sale'>
            <CardDefault
              image='https://kartinki-dlya-srisovki.ru/wp-content/uploads/2018/06/prostye-risunki-dlya-srisovki-23.jpg'
              title={dict.kittensForSale}
            />
          </Link>
        </Col>
        <Col>
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
