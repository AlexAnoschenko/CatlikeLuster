import { FC, useEffect } from 'react';
import { Layout } from 'antd';

// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import { useActions } from './hooks/useActions';
import { LocalStorage } from './constants';

import './App.css';

const App: FC = () => {
  const { setLang } = useActions();

  useEffect(() => {
    const lang = localStorage.getItem(LocalStorage.LANGUAGE);
    setLang(lang || 'en');

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className='bg-bg-pages'>
      <Navbar />
      <Layout.Content className='h-screen pt-64px'>
        <AppRouter />
      </Layout.Content>
      {/* <Footer /> */}
    </Layout>
  );
};

export default App;
