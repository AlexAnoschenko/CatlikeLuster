import { Row, Col } from 'antd';
import { FC } from 'react';

import SingleCard from '../../components/SingleCard/SingleCard';
import { parentsCards } from './constants';

const Parents: FC = () => {
    return (
        <div className='flex justify-center min-h-content page px-50px pt-60'>
            <Row gutter={[70, 40]}>
                {parentsCards.map((parent) => (
                    <Col>
                        <SingleCard
                            image={parent.image}
                            title={parent.title}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Parents;
