import React from 'react';
import { RiArrowRightUpLine } from 'react-icons/ri';

const FAQ = () => {
     const handleClick=()=>{

    }


    return (
        <div>
            <div className="collapse collapse-arrow bg-base-100 border mb-3 border-[#C3DFE2]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold text-primary">How does this posture corrector work?</div>
                <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
            </div>
            <div className="collapse mb-3 collapse-arrow bg-base-100 border border-[#C3DFE2]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-primary font-semibold">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse mb-3 collapse-arrow bg-base-100 border border-[#C3DFE2]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-primary font-semibold">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse mb-3 collapse-arrow bg-base-100 border border-[#C3DFE2]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-primary font-semibold">Does it have smart features like vibration alerts?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className="collapse mb-3 collapse-arrow bg-base-100 border border-[#C3DFE2]">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-primary font-semibold">How will I be notified when the product is back in stock?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className='flex items-center justify-center my-10'>
                <button className='px-3 md:px-8 bg-secondary rounded-3xl font-bold py-1 md:py-2' onClick={handleClick}>See More FAQ’s</button>
                <div>
                    <RiArrowRightUpLine className='text-secondary text-3xl bg-black rounded-3xl' />
                </div>
            </div>
        </div>
    );
};

export default FAQ;