import { Col, Layout, Row } from 'antd';
import { FC, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import setLanguage from '../Dictionary/index';
import { useActions } from '../../hooks/useActions';

const Navbar: FC = (props) => {
    const router = useHistory();
    const { pathname } = router.location;
    const [selectedPage, setSelectedPage] = useState(pathname);
    const { language } = useTypedSelector((state) => state.language);
    const dict = setLanguage(language);
    const { setLang } = useActions();

    console.log(pathname);

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
                <Link
                    className='cursor-pointer'
                    to='/main'
                    onClick={() => setSelectedPage('/')}
                >
                    <img
                        src='https://i.ibb.co/bXW5r21/logo.png'
                        alt='logo'
                        className='w-logo'
                    />
                </Link>

                <div className='flex gap-x-10'>
                    <Row
                        gutter={30}
                        className='text-lg select-none nunito'
                    >
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/main'
                                onClick={() => setSelectedPage('/')}
                            >
                                {dict.main}
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/parents' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/parents'
                                onClick={() =>
                                    setSelectedPage('/parents')
                                }
                            >
                                {dict.parents}
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/kittens' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/kittens'
                                onClick={() =>
                                    setSelectedPage('/kittens')
                                }
                            >
                                {dict.kittens}
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/gallery' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/gallery'
                                onClick={() =>
                                    setSelectedPage('/gallery')
                                }
                            >
                                {dict.gallery}
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/info' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/info'
                                onClick={() =>
                                    setSelectedPage('/info')
                                }
                            >
                                {dict.info}
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                className={`cursor-pointer ${
                                    selectedPage === '/contacts' &&
                                    'border-b-2 border-black'
                                }`}
                                to='/contacts'
                                onClick={() =>
                                    setSelectedPage('/contacts')
                                }
                            >
                                {dict.contacts}
                            </Link>
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
