import { FC } from 'react';
import { Layout } from 'antd';

// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/AppRouter/AppRouter';

import './App.css';

const App: FC = () => {
    return (
        <Layout>
            <Navbar />
            <Layout.Content className='min-h-content'>
                <AppRouter />
            </Layout.Content>
            {/* <Footer /> */}
        </Layout>
    );
};

export default App;
