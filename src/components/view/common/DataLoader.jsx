import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/images/loader/loader.json';

const DataLoader = () => {

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
            <div className="data-loaderbox">
                <div className="loader-data">
                    <Lottie speed={1.5} options={loaderoptions} height={40} width={40} />
                </div>
            </div>
        </>
    )
}

export default DataLoader;



