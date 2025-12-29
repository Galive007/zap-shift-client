import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='bg-[#EAECED] py-5'>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <div className=''>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default RootLayout;