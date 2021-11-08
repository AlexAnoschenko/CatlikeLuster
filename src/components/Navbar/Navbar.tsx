import { Col, Layout, Row } from 'antd';
import { FC } from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../Dictionary/index';
import { useActions } from '../../hooks/useActions';

const Navbar: FC = () => {
    const { language } = useTypedSelector((state) => state.language);
    const dict = setLanguage(language);
    const { setLang } = useActions();

    const selectLanguage = (lang: string) => {
        setLang(lang);
    };

    return (
        <Layout.Header className='h-header bg-header'>
            <Row
                className='h-full'
                align='middle'
                justify='space-between'
            >
                <img
                    src='https://i.ibb.co/bXW5r21/logo.png'
                    alt='logo'
                    className='w-logo'
                />

                <div className='flex gap-x-10'>
                    <Row
                        gutter={30}
                        className='text-lg cursor-pointer select-none nunito'
                    >
                        <Col className='text-menu-button active:text-menu-active'>
                            {dict.main}
                        </Col>
                        <Col className='hover:text-menu-button active:text-menu-active'>
                            {dict.parents}
                        </Col>
                        <Col className='hover:text-menu-button active:text-menu-active'>
                            {dict.kitten}
                        </Col>
                        <Col className='hover:text-menu-button active:text-menu-active'>
                            {dict.gallery}
                        </Col>
                        <Col className='hover:text-menu-button active:text-menu-active'>
                            {dict.info}
                        </Col>
                        <Col className='hover:text-menu-button active:text-menu-active'>
                            {dict.contacts}
                        </Col>
                    </Row>

                    <Row gutter={10}>
                        <Col>
                            <img
                                src='https://i.ibb.co/DtbwYzn/en.png'
                                alt='en'
                                className={`cursor-pointer w-7 ${
                                    language === 'en' &&
                                    'border-2 border-indigo-600 rounded-full'
                                }`}
                                onClick={() => selectLanguage('en')}
                            />
                        </Col>
                        <Col>
                            <img
                                src='https://i.ibb.co/GdRBgGh/ru.png'
                                alt='ru'
                                className={`cursor-pointer w-7 ${
                                    language === 'ru' &&
                                    'border-2 border-indigo-600 rounded-full'
                                }`}
                                onClick={() => selectLanguage('ru')}
                            />
                        </Col>
                    </Row>
                </div>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
