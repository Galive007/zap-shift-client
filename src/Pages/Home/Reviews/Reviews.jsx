import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Reviews = ({ reviewsPromise }) => {
    const reviews = use(reviewsPromise)
    // console.log(reviews);

   
    return (
        <div className='pb-10'>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 35,
                        stretch: '50%',
                        depth: 200,
                        modifier: 1,
                        scale: 0.85,
                        slideShadows: true
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((reviewCard, index) => <SwiperSlide key={index}>
                            <ReviewsCard reviewCard={reviewCard}></ReviewsCard>
                        </SwiperSlide>)
                    }


                </Swiper>
            </>
            
        </div>
    );
};

export default Reviews;