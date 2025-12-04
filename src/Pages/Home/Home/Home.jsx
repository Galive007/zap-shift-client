import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import BrandsSlider from '../Brands/BrandsSlider';
import ServiceCard from '../ServiceCard/ServiceCard';
import OurFirstPriority from '../OurFirstPriority/OurFirstPriority';
import CustomeSaying from '../CustomeSaying/CustomeSaying';
import Reviews from '../Reviews/Reviews';
import BrandsFreeMode from '../Brands/BrandsFreeMode';
import FAQ from '../FAQ/FAQ';

const reviewsFetch=fetch('/reviews.json').then(res=>res.json())

const Home = () => {
    const reviewsPromise=reviewsFetch
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <Services></Services>
            {/* <Brands></Brands> */}
            {/* <BrandsSlider></BrandsSlider> */}
            <BrandsFreeMode></BrandsFreeMode>
            <ServiceCard></ServiceCard>
            <OurFirstPriority></OurFirstPriority>
            <CustomeSaying></CustomeSaying>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;