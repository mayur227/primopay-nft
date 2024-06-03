import React from 'react';
import Logo from '../../assets/images/logo/logo.svg';

const ComingSoon = () => {

    return (
        <>
            <div className="container-fluid p-0 m-0">
                <div className="comingsoon comingsoon-bgimg">
                    <div className="comingsoon-inner text-center">
                        <img src={Logo} className="img-fluid" alt="" />
                        <h5>WE ARE COMING SOON</h5>
                        {/* <div className="countdown" id="clockdiv">
                            <ul>
                                <li><span className="time" id="days">-197</span><span className="title">days</span></li>
                                <li><span className="time" id="hours">-11</span><span className="title">Hours</span></li>
                                <li><span className="time" id="minutes">-44</span><span className="title">Minutes</span></li>
                                <li><span className="time" id="seconds">-10</span><span className="title">Seconds</span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComingSoon;
