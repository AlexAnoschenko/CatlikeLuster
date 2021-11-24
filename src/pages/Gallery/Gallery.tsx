import { FC } from 'react';
import { Image, Row, Col } from 'antd';

import { useGallery } from './hooks/useGallery';
import { Loader } from '../../components/Loader/Loader';

const Gallery: FC = () => {
  const { isLoading, galleryImages } = useGallery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Gallery;
