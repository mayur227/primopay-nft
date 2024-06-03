import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/images/loader/nodata.json';

const NoDataLoader = () => {

    const loaderoptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <div className="nodata-loader-part">
                <div className="nodata-box">
                    <Lottie speed={1.5} options={loaderoptions} />
                </div>
            </div>
        </>
    )
}

export default NoDataLoader;



