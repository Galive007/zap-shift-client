import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import amazon from '../../../assets/brands/amazon.png'
import amazonVec from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const brandLogos = [amazon, amazonVec, casio, moonstar, randstad, star, start_people]

const BrandsSlider = () => {
    return (
        <>
            <div className='text-center mt-4 md:mt-10'>
                <h3 className='text-2xl font-extrabold text-primary'>We've helped thousands of sales teams</h3>
            </div>
            <Swiper

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={4}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper my-5"
            >
                {
                    brandLogos.map((logo, index) => <SwiperSlide key={index}>
                        <img src={logo} />
                    </SwiperSlide>)
                }

                {/* <SwiperSlide>
          <img src={amazonVec} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={star} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={start_people} />
        </SwiperSlide>
         */}
            </Swiper>
        </>
    );
};

export default BrandsSlider;