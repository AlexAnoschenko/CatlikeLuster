import { useState } from 'react';
import { Row, Col } from 'antd';
import { FC } from 'react';

import ParentsModal from '../../components/ParentsModal/ParentsModal';
import ParentCard from '../../components/ParentCard/ParentCard';
import { parentsCards } from './constants';
import { ParentProps } from './types';

const Parents: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentParent, setCurrentParent] = useState<ParentProps>({
    images: [],
    title: '',
  });

  const showModal = (parent: ParentProps) => {
    setIsModalVisible(true);
    setCurrentParent(parent);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentParent({
      images: [],
      title: '',
    });
  };

  return (
    <div className='flex justify-center min-h-content page px-50px pt-60'>
      <ParentsModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        currentParent={currentParent}
      />

      <Row gutter={[70, 40]}>
        {parentsCards.map((parent) => (
          <Col key={parent.title}>
            <ParentCard parent={parent} showModal={showModal} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Parents;
