import { Row } from 'antd';
import { FC } from 'react';
import SingleCard from '../../components/SingleCard/SingleCard';
import { SingleCards } from './constants';

const Landing: FC = () => {
  return (
    <div>
      <Row justify='space-around' gutter={[16, 48]}>
        {SingleCards.map((card) => (
          <SingleCard image={card.image} title={card.title} />
        ))}
      </Row>
    </div>
  );
};

export default Landing;
