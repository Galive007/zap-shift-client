import React from 'react';
import Logo from '../Components/Logo';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto flex'>
            <div className='flex-1 mt-5 ml-5 min-h-screen'>
                <Logo></Logo>
                <div className='flex mt-20 md:mt-30 lg:mt-50 justify-center items-center'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='flex-1  bg-[#FAFDF0] min-h-screen'>
                <img src={AuthImg} alt="" className='mt-50'/>
            </div>
        </div>
    );
};

export default AuthLayout;


// <Logo></Logo>
//             <div className='flex justify-center items-center'>
//
//                 <div className='flex-1 bg-[#FAFDF0] h-full'>
//                     <img src={AuthImg} alt="" />
//                 </div>
//             </div>