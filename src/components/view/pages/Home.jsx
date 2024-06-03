import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';

import HomeCartoon from '../common/HomeCartoon';
import ProductCard from '../common/ProductCard';
import CreatorCard from '../common/CreatorCard';

import avatar from '../../../assets/images/avatar.png';
import middle from '../../../assets/images/middle.svg';
import logoicon from '../../../assets/images/logo-icon.svg';
import owncollectiondp from '../../../assets/images/own_collection_dp.png';
import pc1 from '../../../assets/images/product/18.jpg';
import pc2 from '../../../assets/images/product/35.jpg';
import pc3 from '../../../assets/images/product/3.jpg';
import pc4 from '../../../assets/images/product/19.jpg';
import pc5 from '../../../assets/images/product/30.jpg';
import pc6 from '../../../assets/images/product/28.jpg';
import pc7 from '../../../assets/images/product/31.jpg';
import pc8 from '../../../assets/images/product/36.jpg';

import user1 from '../../../assets/images/users/1.gif';
import user2 from '../../../assets/images/users/2.gif';
import user3 from '../../../assets/images/users/3.gif';
import user4 from '../../../assets/images/users/4.gif';
import user5 from '../../../assets/images/users/5.gif';


const Home = () => {
    const breakpoint = 767;
    const [windowwidth, setWindowWidth] = useState(window.innerWidth);
    const [pddingLeftSize, setPddingLeftSize] = useState();
    
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
        let widthwindow = document.body.clientWidth;
        let containerwidth = document.getElementsByClassName('container')[0];
        let layoutWidth = containerwidth.clientWidth;
        let customlayout = (widthwindow - layoutWidth) / 2;
        setPddingLeftSize(customlayout);
    };
    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("load", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const productcardimg = [
        {imgpath:`${pc1}`},
        {imgpath:`${pc2}`},
        {imgpath:`${pc3}`},
        {imgpath:`${pc4}`},
        {imgpath:`${pc5}`},
        {imgpath:`${pc6}`},
        {imgpath:`${pc7}`},
        {imgpath:`${pc8}`}
    ];

    const userdata = [
        {imgpath:`${user1}`},
        {imgpath:`${user2}`},
        {imgpath:`${user3}`},
        {imgpath:`${user4}`},
        {imgpath:`${user5}`}
    ];


    return(
        <>
            <div className="home-banner-part">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-md-6">
                            <div className="home-content-left" style={{paddingLeft:pddingLeftSize}}>
                                <div className="home-content-part" >
                                    <h1>Discover, Collect and Sell Extraordinary NFTs</h1>
                                    <p>We offer a wide range of non-fungible tokens, including art, censorship-resistant domain names and other collectibles</p>
                                </div>
                            </div>
                        </div>    
                        <div className="col-md-6 col-xxl-5 offset-xxl-1 pe-0">
                            <div className="home-slider-part">
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={1.5}
                                    spaceBetween={10}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false
                                    }}
                                    loop={true}
                                    className="mySwiper-home"
                                >
                                {productcardimg.map((items, index) => {
                                    return  <SwiperSlide key={index}>
                                                <div className="h-feature-product">
                                                    <div className="h-pd-img">
                                                        <img src={items.imgpath} className="img-fluid" alt='' />
                                                    </div>
                                                    <div className="h-pd-content">
                                                        <div className="h-pd-title">
                                                            <h3>Abstract Painting {index}</h3>
                                                            <span>0.054 ETH</span>
                                                        </div>
                                                        <Divider className="mt-2 mb-3" />
                                                        <div className="h-pd-bottom">
                                                            <div className="pd-user">
                                                                <div className="pd-user-imgicon">
                                                                    <img src={avatar} className="img-fluid" alt='' />
                                                                </div>
                                                                <h5>@xander</h5>
                                                            </div>
                                                            <div className="h-pd-bid">
                                                                <a role={'button'} className="btn-theme btn-theme-color btn-lg-theme font-semibold">Place Bid</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                })}
                                </Swiper>
                                <div className='h-view-more-btn text-center text-md-left mt-40 mt-md-5 ms-100 ps-ms-3'>
                                    <Link to={'/marketplace'} className="btn-theme btn-theme-color font-bold">View More</Link>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                {
                    windowwidth > breakpoint ? <div className='home-cartoon' style={{paddingLeft:pddingLeftSize}}><HomeCartoon /></div> : ''
                }
            </div>
            
            <div className="ptb80 bg-gray-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-md-7 col-lg-6 col-xl-4'>
                            <div className='section-title text-md-center d-block'>
                                <h2>Popular Creators</h2>
                                <p>I make are with the simple goal of giving you something pleasing to look at for a few seconds.</p>
                            </div>
                        </div>
                    </div>

                    <div className="profile-swiper">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={4}
                            spaceBetween={15}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            loop={true}
                            className="mySwiper-profile"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.7,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            {
                                userdata.map((data, index) => {
                                    return(
                                        <SwiperSlide key={index}>
                                            <CreatorCard nftuserimg={data.imgpath} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="pb80 bg-gray-light">
                <div className="container">
                    <div className='section-title'>
                        <h2>Trending</h2>
                        <div className="section-action-btn">
                            <a role={'button'}>More NFTs <i className="ri-arrow-right-fill"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        {productcardimg.map((items, index) => {
                            return  <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={index}>
                                        <ProductCard nftimg={items.imgpath} />
                                    </div>
                        })}
                    </div>
                </div>
            </div>
            {
                windowwidth > breakpoint ? 
                    <div className="ptb40 own_collection overflow-hidden">
                        <div className="container">
                            <div className='row'>
                                <div className="col-12 col-lg-6">
                                    <div className="ptb40 own_collection_left">
                                        <h3>Start your own collection today</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                        <a role={'button'} className="btn-theme btn-theme-color font-bold">Start Collecting</a>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <div className="own_collection_right">
                                        <div className='ptb40 own_collection_logo'>
                                            <div className='d-inline-block text-center position-relative'>
                                                <img src={middle} className="img-fluid wc-middle-bg" alt="" />
                                                <span className="logo-icon-part">
                                                    <img src={logoicon} className="img-fluid" alt="" />
                                                </span>
                                                <div className='own_collection_dp'>
                                                    <img src={owncollectiondp} className="img-fluid" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                : ''
            }
            
            <div className={`bg-gray-light ${windowwidth > breakpoint ? "ptb80" : "pb80"}`}>
                <div className="container">
                    <div className='section-title'>
                        <h2>Top Selection</h2>
                        <div className="section-action-btn">
                            <a role={'button'}>More NFTs <i className="ri-arrow-right-fill"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        {productcardimg.map((items, index) => {
                            return  <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={index}>
                                        <ProductCard nftimg={items.imgpath} />
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;