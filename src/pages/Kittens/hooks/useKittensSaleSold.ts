import { useState } from 'react';

import { ParentProps } from '../../Parents/types';

const initialValues = {
  id: '',
  images: [],
  name: '',
};

export const useKittensSaleSold = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentParent, setCurrentParent] =
    useState<ParentProps>(initialValues);

  const showModal = (parent: ParentProps) => {
    setIsModalVisible(true);
    setCurrentParent(parent);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentParent(initialValues);
  };

  return {
    isModalVisible,
    currentParent,
    showModal,
    handleCancel,
  };
};
