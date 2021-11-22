import { FC } from 'react';
import { Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';

import ParentsModal from '../../components/ParentsModal/ParentsModal';
import ParentCard from '../../components/ParentCard/ParentCard';
import { useGetDataFromDB } from './hooks/useGetDataFromDB';
import { ParentProps } from './types';

const Parents: FC = () => {
  const {
    isModalVisible,
    currentParent,
    parents,
    showModal,
    handleCancel,
  } = useGetDataFromDB();

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1299px)',
  });

  return (
    <div
      className={`flex justify-center bg-bg-pages min-h-content page px-50px ${
        isTabletOrMobile ? 'pt-50px pb-50px' : 'pt-60'
      }`}
    >
      <ParentsModal
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        currentParent={currentParent}
      />

      <Row gutter={[70, 40]} className='flex justify-center'>
        {parents?.map((parent: ParentProps) => (
          <Col key={parent.name}>
            <ParentCard
              parent={parent}
              showModal={showModal}
              height={300}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Parents;
