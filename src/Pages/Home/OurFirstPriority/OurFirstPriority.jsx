import React from 'react';
import topWave from "../../../assets/be-a-merchant-bg.png";
import rightBox from "../../../assets/location-merchant.png";


const OurFirstPriority = () => {
    return (
        <div className='mt-8 md:mt-10'>
            <div className="relative bg-primary text-white rounded-3xl overflow-hidden p-10 w-full max-w-7xl mx-auto">
                {/* Top decorative image */}
                <img
                    src={topWave}
                    alt="Top Wave"
                    className="absolute top-0 left-0 w-full object-cover opacity-60"
                />


                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                    {/* Left text content */}
                    <div className="max-w-xl">
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                            Merchant and Customer Satisfaction <br /> is Our First Priority
                        </h1>
                        <p className="text-gray-200 mb-6 leading-relaxed">
                            We offer the lowest delivery charge with the highest value along with
                            100% safety of your product. ZapShift courier delivers your parcels in
                            every corner of Bangladesh right on time.
                        </p>


                        <div className="flex flex-wrap gap-4">
                            <button className="bg-transparent border border-secondary text-secondary font-medium px-6 py-3 rounded-full hover:bg-secondary hover:text-black transition">
                                Become a Merchant
                            </button>
                            <button className="bg-transparent border border-secondary text-secondary font-medium px-6 py-3 rounded-full hover:bg-secondary hover:text-black transition">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>


                    {/* Right side image */}
                    <img
                        src={rightBox}
                        alt="Right Illustration"
                        className="w-72 md:w-96 object-contain"
                    />
                </div>
            </div>

        </div>
    );
};

export default OurFirstPriority;