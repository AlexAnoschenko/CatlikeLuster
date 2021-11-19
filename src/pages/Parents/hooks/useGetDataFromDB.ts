import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';

import { db } from '../../../firebase-config';
import { ParentProps } from '../types';

export const useGetDataFromDB = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentParent, setCurrentParent] = useState<ParentProps>({
    id: '',
    images: [],
    name: '',
  });
  const [parents, setParents] = useState<any>([]);

  const parentsCollectionRef = collection(db, 'parents');

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

  const getParents = async () => {
    const data = await getDocs(parentsCollectionRef);
    setParents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getParents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isModalVisible, currentParent, parents, showModal, handleCancel };
};
