import { Card } from 'antd';

import { IParentCard } from '../../pages/Parents/types';

const ParentCard = ({ parent, showModal }: IParentCard) => {
  const { images, name } = parent;

  return (
    <Card
      hoverableF
      style={{ width: 270 }}
      cover={
        <img
          alt='example'
          src={images[0]}
          style={{ height: 225, objectFit: 'cover' }}
        />
      }
      className='shadow-xl'
      onClick={() => showModal(parent)}
    >
      <div title={name} className='text-xl font-bold text-center'>
        {name}
      </div>
    </Card>
  );
};

export default ParentCard;
