import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './style.css';
// import required modules
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from '../../../assets/brands/amazon.png'
import amazonVec from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'




const Brands = () => {
    return (
        <div className='mt-10'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide><img src={amazon} alt="" /></SwiperSlide>
                <SwiperSlide><img src={amazonVec} alt="" /></SwiperSlide>
                <SwiperSlide><img src={casio} alt="" /></SwiperSlide>
                <SwiperSlide><img src={moonstar} alt="" /></SwiperSlide>
                <SwiperSlide><img src={randstad} alt="" /></SwiperSlide>
                <SwiperSlide><img src={star} alt="" /></SwiperSlide>
                <SwiperSlide><img src={start_people} alt="" /></SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Brands;