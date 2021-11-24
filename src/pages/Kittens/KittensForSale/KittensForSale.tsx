import { FC } from 'react';
import { Col, Row } from 'antd';

import ParentsModal from '../../../components/ParentsModal/ParentsModal';
import ParentCard from '../../../components/ParentCard/ParentCard';
import BackButton from '../../../components/BackButton/BackButton';
import { useKittensSaleSold } from '../hooks/useKittensSaleSold';
import { kittensForSaleCards } from '../constants';

const KittensForSale: FC = () => {
  const { isModalVisible, currentParent, showModal, handleCancel } =
    useKittensSaleSold();

  return (
    <div className='flex items-center justify-center pt-10 bg-bg-pages min-h-content page px-50px pb-50px'>
      <BackButton />

      <ParentsModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        currentParent={currentParent}
      />

      <Row justify='center' gutter={[70, 40]} className='gap-10'>
        {kittensForSaleCards.map((parent) => (
          <Col key={parent.name}>
            <ParentCard parent={parent} showModal={showModal} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default KittensForSale;
