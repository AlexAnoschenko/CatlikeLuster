import { Col, Image, Row } from 'antd';

import { ImagesProps } from './types';

import './styles.css';

const ImageZoom = ({ images }: ImagesProps) => (
    <Image.PreviewGroup>
        <Row gutter={[30, 30]} justify='center'>
            {images.map((image) => (
                <Col>
                    <Image width={200} src={image} />
                </Col>
            ))}
        </Row>
    </Image.PreviewGroup>
);

export default ImageZoom;
