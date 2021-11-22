import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { Image, Row, Col } from 'antd';

import { db } from '../../firebase-config';

const Gallery: FC = () => {
  const [galleryImages, setGalleryImages] = useState<any>([]);

  const parentsCollectionRef = collection(db, 'gallery');

  const getGallery = async () => {
    const data = await getDocs(parentsCollectionRef);
    setGalleryImages(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  console.log(galleryImages);

  useEffect(() => {
    getGallery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='page pt-50px px-50px'>
      <Image.PreviewGroup>
        <Row gutter={[30, 30]} justify='center'>
          {galleryImages[0]?.images.map((image: string) => (
            <Col key={image}>
              <Image width={200} src={image} />
            </Col>
          ))}
        </Row>
      </Image.PreviewGroup>
    </div>
  );
};

export default Gallery;
