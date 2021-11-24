import { FC } from 'react';
import { Layout } from 'antd';

import Navbar from 'components/Navbar/Navbar';
import AppRouter from 'components/AppRouter/AppRouter';
import { useLanguageAndMobile } from 'hooks/useLanguageAndMobile';

import './App.css';

const App: FC = () => {
  const { isMobile } = useLanguageAndMobile();

  return (
    <Layout className='bg-bg-pages'>
      <Navbar />

      <Layout.Content
        className={`h-screen ${!isMobile && 'pt-64px'}`}
      >
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
