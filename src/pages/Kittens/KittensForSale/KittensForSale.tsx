import { FC, useState } from 'react';
import { Col, Row } from 'antd';
import { useMediaQuery } from 'react-responsive';

import ParentsModal from '../../../components/ParentsModal/ParentsModal';
import ParentCard from '../../../components/ParentCard/ParentCard';
import { ParentProps } from '../../Parents/types';
import { kittensForSaleCards } from '../constants';
import BackButton from '../../../components/BackButton/BackButton';

const KittensForSale: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentParent, setCurrentParent] = useState<ParentProps>({
    id: '',
    images: [],
    name: '',
  });

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1299px)',
  });

  const showModal = (parent: ParentProps) => {
    setIsModalVisible(true);
    setCurrentParent(parent);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentParent({
      id: '',
      images: [],
      name: '',
    });
  };

  return (
    <div className='flex items-center justify-center pt-10 bg-bg-pages min-h-content page px-50px pb-50px'>
      <BackButton />

      <ParentsModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        currentParent={currentParent}
      />

      <Row
        justify='center'
        gutter={[70, 40]}
        style={{ height: 'fit-content' }}
      >
        {kittensForSaleCards.map((parent) => (
          <Col
            key={parent.name}
            style={{
              paddingLeft: isTabletOrMobile ? 0 : 35,
              paddingRight: isTabletOrMobile ? 0 : 35,
            }}
          >
            <ParentCard parent={parent} showModal={showModal} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KittensForSale;
