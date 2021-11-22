import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import './styles.css';

const Landing: FC = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1299px)',
  });

  return (
    <div className={`main ${isTabletOrMobile && 'bg-none'}`}>
      <div className='flex flex-col justify-center select-none pt-15vh nunito'>
        <div className='flex justify-center'>
          <img
            src='https://i.ibb.co/J7WRPdw/big-logo.png'
            alt='big-logo'
            className='w-28'
          />
        </div>
        <div className='flex justify-center'>
          <h1 className='title'>CATLIKE</h1>
          <h1 className='title-end'>LUSTER</h1>
        </div>
        <div className='flex justify-center'>
          <h2 className='border-t-2 border-black border-solid w-sub-title text-sub-title'>
            ПИТОМНИК БЕНГАЛЬСКИХ КОШЕК
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
