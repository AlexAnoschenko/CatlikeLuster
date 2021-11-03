import { Layout } from 'antd';
import { FC } from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';
import './App.css';

const App: FC = () => {
  return (
    <Layout className='layout'>
      <Navbar />
      <Layout.Content
        style={{
          padding: '50px 50px',
          height: 'calc(100vh - 270px)',
        }}
      >
        <AppRouter />
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export default App;
