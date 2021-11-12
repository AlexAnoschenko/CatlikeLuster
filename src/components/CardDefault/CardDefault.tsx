import { Card } from 'antd';

import { CardDefaultProps } from './types';

const CardDefault = ({
  image,
  title,
  description,
}: CardDefaultProps) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={image} />}
      className='shadow-xl'
    >
      <div title={title} className='text-xl font-bold text-center'>
        {title}
      </div>
    </Card>
  );
};

export default CardDefault;
