import React, { useState } from 'react';
import { Input, Select, Dropdown, Menu, Tooltip } from 'antd';
import { Link, useNavigate } from "react-router-dom";

import ProductCard from '../../common/ProductCard';

import Banner1 from '../../../../assets/images/banner/1.jpeg';
import User1 from '../../../../assets/images/users/1.gif';

import pc1 from '../../../../assets/images/product/18.jpg';
import pc2 from '../../../../assets/images/product/35.jpg';
import pc3 from '../../../../assets/images/product/3.jpg';
import pc4 from '../../../../assets/images/product/19.jpg';
import pc5 from '../../../../assets/images/product/30.jpg';
import pc6 from '../../../../assets/images/product/28.jpg';
import pc7 from '../../../../assets/images/product/31.jpg';
import pc8 from '../../../../assets/images/product/36.jpg';
import MarketplaceFilter from '../../modals/MarketplaceFilter';



const { Option } = Select;

const CreatorDetail = (props) => {
    const navigate = useNavigate();

    const [mpFilterModalOpen, setIsmpFilterModalOpen] = useState(false);

    const mpFilterModalOpenEvent = () => {
        setIsmpFilterModalOpen(true);
    }
    const mpFilterModalCloseEvent = () => {
        setIsmpFilterModalOpen(false);
    }

    const productcardimg = [
        {imgpath:`${pc1}`},
        {imgpath:`${pc2}`},
        {imgpath:`${pc3}`},
        {imgpath:`${pc4}`},
        {imgpath:`${pc5}`},
        {imgpath:`${pc6}`},
        {imgpath:`${pc7}`},
        {imgpath:`${pc8}`},
        {imgpath:`${pc1}`},
        {imgpath:`${pc2}`},
        {imgpath:`${pc3}`},
        {imgpath:`${pc4}`},
        {imgpath:`${pc5}`},
        {imgpath:`${pc6}`},
        {imgpath:`${pc7}`},
        {imgpath:`${pc8}`}
    ];

    return (
        <>
            <div className="crt-box">
                <img className="banner-img" src={Banner1} alt="" />
                <div className="crt-user-img">
                    <img src={User1} alt="" />
                </div>
            </div>
            <div className="crt-detail-box pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="crt-text-data">
                                <div className="crt-back-btn d-none d-md-block">
                                    <a role={'button'} onClick={() => navigate(-1)}>
                                        <i className="ri-arrow-left-s-line"></i>
                                    </a>
                                </div>
                                <div className="crt-detail-text">
                                    <h5>james_195</h5>
                                    <h6>Created by <span className='text-theme-color'>james_195</span> <Tooltip title="verified"><a role={'button'} className='text-theme-color align-bottom'><i className="ri-shield-check-fill"></i></a></Tooltip></h6>
                                    <p>TKG is a collection of 666 badass kitty gangsters, with symbol of tattoos, living in the Proud Kitty Gang (“PKG”) metaverse. Check here: https://www.instagram.com/james_195/</p>
                                </div>
                                <div className="share-dropdown-menu">
                                    <Dropdown overlay={
                                        <Menu className="curreny-dropdown-menu">
                                            <Menu.Item key="0">
                                                <a role="button" className="cur-box"><div className="flex-data-dropdown">
                                                    <i className="ri-twitter-fill"></i>
                                                    <span>Twitter</span>
                                                </div></a>
                                            </Menu.Item>
                                            <Menu.Item key="1">
                                                <a role="button" className="cur-box"><div className="flex-data-dropdown">
                                                    <i className="ri-telegram-fill"></i>
                                                    <span>Telegram</span>
                                                </div></a>
                                            </Menu.Item>
                                        </Menu>
                                    } trigger={['click']} getPopupContainer={node => node.parentNode}>
                                        <a className="share-dropdown" onClick={e => e.preventDefault()}><i className="ri-share-line"></i></a>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="collection-bx">
                                <p>Floor Price <Tooltip title="The lowest fixed price in marketplace."><i className="ri-information-line align-middle"></i></Tooltip></p>
                                <h6>499.75 USD</h6>
                                <small className="text-success">+11.11%</small>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="collection-bx">
                                <p>Floor Price <Tooltip title="The lowest fixed price in marketplace."><i className="ri-information-line align-middle"></i></Tooltip></p>
                                <h6>19,190,508.67 USD</h6>
                                <small>Total</small>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="collection-bx">
                                <p>Floor Price <Tooltip title="The lowest fixed price in marketplace."><i className="ri-information-line align-middle"></i></Tooltip></p>
                                <h6>19,190,508.67 USD</h6>
                                <small></small>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-30">
                            <div className="collection-bx">
                                <p>Floor Price <Tooltip title="The lowest fixed price in marketplace."><i className="ri-information-line align-middle"></i></Tooltip></p>
                                <h6>499.75 USD</h6>
                                <small>Total</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="creator-section border-top pt40 pb60">
                <div className="container">
                    <div className="filter-data-box creator-detail-filter mb-20">
                        <div className="row align-items-center">
                            <div className='col-md-6 col-lg-8'>
                                <div className="mp-search-data mb-3 mb-md-0">
                                    <Input 
                                        placeholder="Search item" 
                                        prefix={<i className="ri-search-2-line"></i>} 
                                        className="form-control w-100" 
                                    />
                                </div>
                            </div>
                            
                            <div className='col-md-6 col-lg-4'>
                                <div className='d-flex'>
                                    <div className='sort-by-select me-3'>
                                        <div className="select-dropdown select-dropdown-radius">
                                            <Select 
                                                className="select-control" 
                                                placeholder="Sort By"
                                                defaultValue='0'
                                                clearIcon={<i className="ri-close-fill"></i>} 
                                                suffixIcon={<i className="ri-arrow-down-s-line"></i>} 
                                                getPopupContainer={node => node.parentNode} 
                                            >
                                                <Option value="0"><div className="double-cryp">Recently listed</div></Option>
                                                <Option value="1"><div className="double-cryp">Ending soon</div></Option>
                                                <Option value="2"><div className="double-cryp">Price: Low to High</div></Option>
                                                <Option value="3"><div className="double-cryp">Price: High to Low</div></Option>
                                                <Option value="4"><div className="double-cryp">Most favorited</div></Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <button className="btn-theme btn-theme-color font-bold filter-stick-btn" onClick={mpFilterModalOpenEvent}>
                                        <i className="ri-filter-fill me-2"></i>
                                        <span>Filter</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="nfts-total-items mt-20 mb-3 font-regular text-gray">
                            <i className="ri-refresh-line align-bottom"></i> 38 items
                        </div>
                    </div>
                    <div className='creator-list'>
                        <div className='row'>
                            {productcardimg.map((items, index) => {
                                return  <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={index}>
                                            <ProductCard nftimg={items.imgpath} />
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <MarketplaceFilter mpFilterModalOpen={mpFilterModalOpen} mpFilterModalCloseEvent={mpFilterModalCloseEvent} />
        </>
    );
}


export default CreatorDetail;

