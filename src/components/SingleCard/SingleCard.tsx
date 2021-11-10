import { Card } from 'antd';

import { IParentCard } from '../../pages/Parents/constants';

const ParentCard = ({ image, title, path = '' }: IParentCard) => {
    return (
        <Card
            hoverable
            style={{ width: 270 }}
            cover={<img alt='example' src={image} />}
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
