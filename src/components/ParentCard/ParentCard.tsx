import { Card } from 'antd';

import { IParentCard } from '../../pages/Parents/types';

const ParentCard = ({ parent, showModal }: IParentCard) => {
    const { images, title } = parent;

    return (
        <Card
            hoverable
            style={{ width: 270 }}
            cover={<img alt='example' src={images[0]} />}
            className='shadow-xl'
            onClick={() => showModal(parent)}
        >
            <div
                title={title}
                className='text-xl font-bold text-center'
            >
                {title}
            </div>
        </Card>
    );
};

export default ParentCard;
