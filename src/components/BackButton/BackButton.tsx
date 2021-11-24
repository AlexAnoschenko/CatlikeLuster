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
        className='fixed border-transparent hover:border-transparent top-50% left-10px bg-back-button'
      />
    </Link>
  );
};

export default BackButton;
