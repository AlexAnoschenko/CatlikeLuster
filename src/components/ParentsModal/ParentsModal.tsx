import { Modal } from 'antd';

import ImageZoom from '../ImageZoom/ImageZoom';
import { ParentsModalProps } from './types';

const ParentsModal = ({
  isModalVisible,
  handleCancel,
  title,
  currentParent,
}: ParentsModalProps) => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={1200}
    >
      <div className='flex-col'>
        <div className='pb-10 text-3xl font-bold'>
          {currentParent.title}
        </div>

        <ImageZoom images={currentParent.images} />
      </div>
    </Modal>
  );
};

export default ParentsModal;
