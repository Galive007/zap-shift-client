import React from 'react';
import { ColorRing } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                colors={['#CAEB66', '#03373D', '#CAEB66', '#abbd81', '#03373D']}
            />
        </div>
    );
};

export default Loading;
