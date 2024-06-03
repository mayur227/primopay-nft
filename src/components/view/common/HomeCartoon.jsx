import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/images/loader/cartoon.json';

const HomeCartoon = () => {

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
            <div className="cartoon-animation">
                <Lottie 
                    speed={1.5} 
                    options={loaderoptions} 
                    // height={400} 
                    // width={620} 
                />
            </div>
        </>
    )
}

export default HomeCartoon;



