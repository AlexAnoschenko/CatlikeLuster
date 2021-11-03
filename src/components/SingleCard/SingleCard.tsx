import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import { ISingleCard } from '../../pages/Landing/constants';

const SingleCard = ({
  image,
  title,
  description,
  path,
}: ISingleCard) => {
  return (
    <NavLink to={path}>
      <Card
        hoverable
        style={{ width: 270 }}
        cover={<img alt='example' src={image} />}
      >
        <Card.Meta title={title} description={description} />
      </Card>
    </NavLink>
  );
};

export default SingleCard;
