import { Card } from 'antd';

import { CardDefaultProps } from './types';

const CardDefault = ({ image, title }: CardDefaultProps) => {
  return (
    <Card
      hoverable
      cover={<img alt='example' src={image} />}
      className='shadow-xl w-240px'
    >
      <div title={title} className='text-xl font-bold text-center'>
        {title}
      </div>
    </Card>
  );
};

export default CardDefault;
