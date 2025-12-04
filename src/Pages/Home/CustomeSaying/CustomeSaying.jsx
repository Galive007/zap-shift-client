import React from 'react';
import img from '../../../assets/customer-top.png'
const CustomeSaying = () => {
    return (
        <div className='flex flex-col items-center justify-center my-8 md:my-10'>
            <div>
                <img src={img} alt="" className='w-full pb-4'/>
            </div>
            <div className='text-center md:w-2/4'>
                <h1 className='font-extrabold text-primary text-4xl pb-2'>What our customers are sayings</h1>
                <p className='text-[16px]'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
        </div>
    );
};

export default CustomeSaying;