import React from 'react';

const ReviewsCard = ({ reviewCard }) => {
    // console.log(reviewCard);

    const {review,userName,user_photoURL,user_email}=reviewCard
    return (
        <div className="bg-white shadow-md rounded-xl p-6 max-w-sm">
            {/* Quote Icon */}
            <div className="text-[#cae2e5] text-4xl mb-3">❝</div>

            {/* Main Text */}
            <p className=" text-[15px]">
                {review}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 my-4"></div>

            {/* Profile */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10"><img src={user_photoURL} alt=""  className='rounded-full'/></div>

                <div>
                    <h4 className="font-semibold text-primary">{userName}</h4>
                    <p className="text-sm hidden md:block
                     text-gray-500">{user_email}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;