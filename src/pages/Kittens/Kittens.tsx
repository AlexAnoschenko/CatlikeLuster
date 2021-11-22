import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

import CardDefault from '../../components/CardDefault/CardDefault';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../../components/Dictionary';

const Kittens: FC = () => {
  const { language } = useTypedSelector((state) => state.language);
  const dict = setLanguage(language);

  return (
    <div className='flex justify-center bg-bg-pages min-h-content page px-50px pt-60'>
      <Row gutter={[70, 40]}>
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
