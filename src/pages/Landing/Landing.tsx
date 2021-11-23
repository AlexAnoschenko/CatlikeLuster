import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';

import './styles.css';

const Landing: FC = () => {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 1299px)',
  });

  return (
    <div className={`main ${isTabletOrMobile && 'bg-none'}`}>
      <div className='flex justify-center mt-20'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/catlikeluster-b7e7d.appspot.com/o/Landing%20Page%2Fmain-logo.png?alt=media&token=900e0e8a-af49-4681-84e2-df71a9f820f2'
          alt='main-logo'
          width={isTabletOrMobile ? 300 : 400}
        />
      </div>
    </div>
  );
};

export default Landing;
