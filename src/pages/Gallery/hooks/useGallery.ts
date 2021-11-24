import { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';

import { db } from '../../../firebase-config';

export const useGallery = () => {
  const [galleryImages, setGalleryImages] = useState<any>([]);
  const galleryCollectionRef = collection(db, 'gallery');

  const getGallery = async () => {
    const data = await getDocs(galleryCollectionRef);
    setGalleryImages(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getGallery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    galleryImages,
  };
};
