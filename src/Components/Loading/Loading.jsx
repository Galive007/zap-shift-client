import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#CAEB66', '#03373D', '#CAEB66', '#abbd81', '#03373D']}
        />
        </div>
    );
};

export default Loading;