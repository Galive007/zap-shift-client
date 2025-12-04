import React from 'react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png'
import amazonVec from '../../../assets/brands/amazon_vector.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import start_people from '../../../assets/brands/start_people.png'

const images = [amazon, amazonVec, casio, moonstar, randstad, star, start_people]


const BrandsFreeMode = () => {
    return (
        <div className='p-10'>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    modules={[FreeMode,Autoplay]}
                    className="mySwiper"
                >
                    {
                        images.map((Image, index) => <SwiperSlide key={index}><img src={Image} alt="" /></SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default BrandsFreeMode;