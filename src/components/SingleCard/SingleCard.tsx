import { Card } from 'antd';
import { ISingleCard } from '../../pages/Landing/constants';

const SingleCard = ({ image, title, description }: ISingleCard) => {
  return (
    <Card
      hoverable
      style={{ width: 270 }}
      cover={<img alt='example' src={image} />}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
};

export default SingleCard;
