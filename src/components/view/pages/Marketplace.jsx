import React from 'react';
import { Dropdown, Input, Menu, Select } from 'antd';
import ProductCard from '../common/ProductCard';

import pc1 from '../../../assets/images/product/18.jpg';
import pc2 from '../../../assets/images/product/35.jpg';
import pc3 from '../../../assets/images/product/3.jpg';
import pc4 from '../../../assets/images/product/19.jpg';
import pc5 from '../../../assets/images/product/30.jpg';
import pc6 from '../../../assets/images/product/28.jpg';
import pc7 from '../../../assets/images/product/31.jpg';
import pc8 from '../../../assets/images/product/36.jpg';
import { Link } from 'react-router-dom';

const { Option } = Select;

const Assets = (props) => {

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
        {imgpath:`${pc4}`},
        {imgpath:`${pc5}`}
    ];

    return(
        <>
            <div className="page-wrapper pb60">
                <div className="container">
                    <div className="page-title text-center ">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="filter-data-box d-lg-flex justify-content-between flex-wrap align-items-center mb-20">
                        <div className="nfts-total-items mb-3 mb-md-0">
                            <i className="ri-refresh-line align-bottom"></i> 37,810 items
                        </div>
                        <div className="row align-items-center all-nft-filter">
                            <div className='col-md-4'>
                                <div className='filter-categories-select position-relative mb-3 mb-md-0'>
                                    <Dropdown overlay={
                                        <Menu className="more-dropdown-menu custom-scrollbar">
                                            <Menu.Item key="key8"><Link to={'/marketplace'}>All NFTs</Link></Menu.Item>
                                            <Menu.Item key="key9"><Link to={'/collection/art'}>Art</Link></Menu.Item>
                                            <Menu.Item key="key10"><Link to={'/collection/art'}>Collectibles</Link></Menu.Item>
                                            <Menu.Item key="key11"><Link to={'/collection/art'}>Music</Link></Menu.Item>
                                            <Menu.Item key="key12"><Link to={'/collection/art'}>Photography</Link></Menu.Item>
                                            <Menu.Item key="key13"><Link to={'/collection/art'}>Sports</Link></Menu.Item>
                                            <Menu.Item key="key14"><Link to={'/collection/art'}>Trading Cards</Link></Menu.Item>
                                            <Menu.Item key="key15"><Link to={'/collection/art'}>Utility</Link></Menu.Item>
                                            <Menu.Item key="key16"><Link to={'/collection/art'}>Virtual Worlds</Link></Menu.Item>
                                        </Menu>
                                    } trigger={['click']} placement="bottom" getPopupContainer={node => node.parentNode}>
                                        <a role={'button'} className="ant-dropdown-link">Categories <span className="ant-select-arrow"><i className="ri-arrow-down-s-line"></i></span></a>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='sort-by-select mb-3 mb-md-0'>
                                    <div className="select-dropdown select-dropdown-radius">
                                        <Select 
                                            allowClear={true} 
                                            className="select-control" 
                                            placeholder="Sort By" 
                                            clearIcon={<i className="ri-close-fill"></i>} 
                                            suffixIcon={<i className="ri-arrow-down-s-line"></i>} 
                                            getPopupContainer={node => node.parentNode} 
                                        >
                                            <Option value="1"><div className="double-cryp">Recently listed</div></Option>
                                            <Option value="2"><div className="double-cryp">Ending soon</div></Option>
                                            <Option value="6"><div className="double-cryp">Price: Low to High</div></Option>
                                            <Option value="7"><div className="double-cryp">Price: High to Low</div></Option>
                                            <Option value="8"><div className="double-cryp">Most favorited</div></Option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className="mp-search-data">
                                    <Input 
                                        placeholder="Search item" 
                                        prefix={<i className="ri-search-2-line"></i>} 
                                        className="form-control" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {productcardimg.map((items, index) => {
                            return  <div className="col-12 col-md-6 col-lg-4 col-xxl-3" key={index}>
                                        <ProductCard nftimg={items.imgpath} />
                                    </div>
                        })}
                    </div>
                    <div className='h-view-more-btn text-center text-md-left mt-40 mt-md-5 ms-100 ps-ms-3'>
                        <a role={'button'} className="btn-theme btn-theme-color font-bold">View More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Assets;
