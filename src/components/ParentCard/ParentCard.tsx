import { Card } from 'antd';

import { IParentCard } from '../../pages/Parents/types';

const ParentCard = ({ parent, showModal }: IParentCard) => {
  const { images, name } = parent;

  return (
    <Card
      hoverable
      cover={
        <img
          alt='example'
          src={images[0]}
          className='object-cover h-parent-card'
        />
      }
      className='shadow-xl w-parent-card'
      onClick={() => showModal(parent)}
    >
      <div title={name} className='text-xl font-bold text-center'>
        {name}
      </div>
    </Card>
  );
};

export default ParentCard;
