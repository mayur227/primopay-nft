import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/images/loader/loader.json';

const PageLoader = ({loading}) => {

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
            <div className={`preloader ${loading === false ? 'loaded' : ''}`}>
                <div className="loaderbox">
                    <Lottie options={loaderoptions} speed={1.5} height={50} width={50} />
                    <h6>Loading..</h6>
                </div>
            </div>
        </>
    )
}

export default PageLoader;



