import React, { useState } from 'react';
import { Input } from 'antd';
import ProductCard from '../common/ProductCard';
import MarketplaceFilter from '../modals/MarketplaceFilter';

import mpSales from '../../../assets/images/1.png';
import Avatar from '../../../assets/images/avatar.png';

import pc1 from '../../../assets/images/product/18.jpg';
import pc2 from '../../../assets/images/product/35.jpg';
import pc3 from '../../../assets/images/product/3.jpg';
import pc4 from '../../../assets/images/product/19.jpg';

const Marketplace = () => {

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
    ];

    return(
        <>
            <div className="page-wrapper">
                <div className="pb60">
                    <div className="container">
                        <div className="row marketplace-row">
                            <div className="col-12 col-lg-4">
                                <div className="marketplace-block">
                                    <div className="mp-title-block">
                                        <h4>Top Sales</h4>
                                        <a role='button'>More<i className="ri-arrow-right-s-line align-middle ms-1"></i></a>
                                    </div>
                                    <div className="mp-listing">
                                        <ul>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">1</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Demi-god NFT Horse Ticket</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Price</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">2</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Demi-god NFT Horse Ticket</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Price</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">3</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Demi-god NFT Horse Ticket</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Price</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="marketplace-block">
                                    <div className="mp-title-block">
                                        <h4>Top Collection</h4>
                                        <a role='button'>More<i className="ri-arrow-right-s-line align-middle ms-1"></i></a>
                                    </div>
                                    <div className="mp-listing">
                                        <ul>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">1</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Highest IHO Part 1</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Volume</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">2</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>X-Metaverse - Box</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Volume</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">3</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={mpSales} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>X World Games</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Volume</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="marketplace-block">
                                    <div className="mp-title-block">
                                        <h4>Top Creator</h4>
                                        <a role='button'>More<i className="ri-arrow-right-s-line align-middle ms-1"></i></a>
                                    </div>
                                    <div className="mp-listing">
                                        <ul>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">1</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={Avatar} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Jane Cooper</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Sales</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">2</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={Avatar} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Esther Howard</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Sales</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a role="button">
                                                    <div className="mp-list-number">3</div>
                                                    <div className="mp-list-detail">
                                                        <div className="mp-l-detail-left">
                                                            <img src={Avatar} alt="" />
                                                        </div>
                                                        <div className="mp-l-detail-right">
                                                            <h6>Wade Warren</h6>
                                                            <div className='d-flex align-items-baseline flex-wrap'>
                                                                <span className='mp-lable-name'>Sales</span>
                                                                <h5>15,000.00 BUSD</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb80">
                    <div className="container">
                        <div className="filter-data-box">
                            <div className="mp-search-data mb-30">
                                <Input placeholder="Search item" prefix={<i className="ri-search-2-line"></i>} suffix={
                                    <a role='button' onClick={mpFilterModalOpenEvent}><i className="ri-filter-fill"></i></a>
                                } className="form-control" />
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
            </div>
            <MarketplaceFilter mpFilterModalOpen={mpFilterModalOpen} mpFilterModalCloseEvent={mpFilterModalCloseEvent} />
        </>
    )
}
export default Marketplace;
