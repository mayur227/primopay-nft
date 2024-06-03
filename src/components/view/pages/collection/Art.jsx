import React, { useState } from 'react';

import Banner1 from '../../../../assets/images/banner/1.jpeg';
import CreatorCard from '../../common/CreatorCard';

import user1 from '../../../../assets/images/users/1.gif';
import user2 from '../../../../assets/images/users/2.gif';
import user3 from '../../../../assets/images/users/3.gif';
import user4 from '../../../../assets/images/users/4.gif';
import user5 from '../../../../assets/images/users/5.gif';

const Art = (props) => {

    const [exploreinfoshow, setExploreInfoShow] = useState(false);

    const exploredetailshow = () => {
        exploreinfoshow ? setExploreInfoShow(false) : setExploreInfoShow(true)
    }

    const userdata = [
        {imgpath:`${user1}`},
        {imgpath:`${user2}`},
        {imgpath:`${user3}`},
        {imgpath:`${user4}`},
        {imgpath:`${user5}`},
        {imgpath:`${user1}`},
        {imgpath:`${user2}`},
        {imgpath:`${user3}`},
        {imgpath:`${user4}`},
        {imgpath:`${user5}`}
    ];


    return(
        <>
            <div className="crt-wrapper">
                <div className="crt-box mb-30">
                    <img className="banner-img" src={Banner1} alt="" />
                    {/* <div className="crt-user-img">
                        <img src={User1} alt="" />
                    </div> */}
                </div>
                <div className="pb-3">
                    <div className="container">
                        <div className="explore-title text-center ">
                            <h2 className='font-semibold'>{props.title}</h2>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-xl-6'>
                                <div className={`crt-explore-info ${exploreinfoshow ? "show" : ""}`}>
                                    <div className='crt-explore-detail text-center'>
                                        <p>An online community of makers, developers, and traders is pushing the art world into new territory. It all started with CryptoPunks, a set of 10,000 randomly generated punks that proved demand for the digital ownership of non-physical items and collectibles in 2017, and the market has evolved rapidly ever since.</p>
                                        <p>As the underlying technology develops, a growing pool of artists are selling verified, immutable works to art lovers and speculators, and the space as a whole is waking up to the power and potential of decentralized networks and currencies. With creators and collectors generating meaningful revenue through an entirely digital ecosystem, the tokenization of gifs, memes, and MP4s is emerging as the most exciting and relevant blockchain use case. From SuperRare to Josie to JOY, browse and trade NFTs from some of the world's top crypto artists on OpenSea.</p>
                                    </div>
                                    <a role={'button'} onClick={exploredetailshow}>
                                        <i className="ri-arrow-down-s-line"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb60 pt-30 border-top">
                    <div className="container-fluid">
                        <div className="explore-title text-center mb-4 mb-lg-5">
                            <h3 className='font-semibold'>Trending collections in Art</h3>
                        </div>
                        <div className='creator-list'>
                            <div className='row'>
                                {userdata.map((data, index) => {
                                    return(
                                        <div key={index} className='col-md-6 col-lg-4 col-xl-3 mb-4'>
                                            <CreatorCard nftuserimg={data.imgpath} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Art;
