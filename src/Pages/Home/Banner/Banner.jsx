import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from '../../../assets/banner/banner1.png'
import banner2 from '../../../assets/banner/banner2.png'
import banner3 from '../../../assets/banner/banner3.png'

import { RiArrowRightUpLine } from 'react-icons/ri';
import { Link } from 'react-router';


const Banner = () => {

    const handleClick=(e)=>{
        e.preventDefault()
        console.log('clicked');
        
    }

    return (
        <div className='relative mt-6'>
            <Carousel autoPlay={true} showThumbs={false} showIndicators={true} showStatus={false} dynamicHeight={true} stopOnHover={true} infiniteLoop={true}>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />

                </div>
                <div>
                    <img src={banner3} />
                </div>
            </Carousel>
            <div>
                <div className='absolute bottom-5 left-3 sm:bottom-8 md:bottom-14 lg:bottom-22 md:left-15
            '>
                    <div className='flex items-center'>
                        <button className='px-3 md:px-8 bg-secondary rounded-3xl font-bold py-1 md:py-2' onClick={handleClick}>Track Your Parcel</button>
                        <div>
                            <RiArrowRightUpLine className='text-secondary text-3xl bg-black rounded-3xl' />
                        </div>
                        <Link to='/rider' className='ml-3 px-2 md:px-8 btn rounded-xl py-1 md:py-2'>Be A Rider</Link>
                        <div></div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;

/* https://react-responsive-carousel.js.org/storybook/index.html?path=/story/01-basic--base&knob-showArrows_Toggles=true&knob-showStatus_Toggles=&knob-showIndicators_Toggles=true&knob-infiniteLoop_Toggles=true&knob-showThumbs_Toggles=&knob-useKeyboardArrows_Toggles=true&knob-autoPlay_Toggles=true&knob-stopOnHover_Toggles=true&knob-swipeable_Toggles=true&knob-dynamicHeight_Toggles=true&knob-emulateTouch_Toggles=&knob-autoFocus_Toggles=&knob-thumbWidth_Values=100&knob-selectedItem_Values=0&knob-interval_Values=2000&knob-transitionTime_Values=500&knob-swipeScrollTolerance_Values=5

*/
