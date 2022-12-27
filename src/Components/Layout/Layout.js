import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Header/Header';

const Layout = () => {
    return (
        <div className=''>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;