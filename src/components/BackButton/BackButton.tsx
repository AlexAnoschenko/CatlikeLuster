import { Button } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Link to='/kittens'>
      <Button
        type='primary'
        shape='circle'
        icon={<CaretLeftOutlined />}
        size='large'
        style={{
          top: '50%',
          left: 10,
          background: '#E58E37',
        }}
        className='fixed border-transparent hover:border-transparent'
      />
    </Link>
  );
};

export default BackButton;
