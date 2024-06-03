import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import Countdown, {zeroPad} from 'react-countdown';
import { Link } from 'react-router-dom';

import nftdetail from '../../../assets/images/nft-detail.png';
import Avatar from '../../../assets/images/avatar.png';
import Checkout from '../modals/Checkout';

const NFTDetail = () => {

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        return <div className="pd-right-endtime"><span>{zeroPad(days)}</span><span>{zeroPad(hours)}</span><span>{zeroPad(minutes)}</span><span>{zeroPad(seconds)}</span></div>;
    };

    const [CheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

    const CheckoutModalOpenEvent = () => {
        setIsCheckoutModalOpen(true);
    }
    const CheckoutModalCloseEvent = () => {
        setIsCheckoutModalOpen(false);
    }

    return(
        <>
            <div className="page-wrapper pb80">
                <div className="container">
                    <div className="back-page-link">
                        <Link to={'/'} className="btn-theme">Back to home</Link>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-d-left">
                                <div className="product-d-img">
                                    <a href="#"><img src={nftdetail} className="img-fluid" alt="" /></a>
                                </div>
                                <div className="pd-left-content mt-4">
                                    {/* <span className="mb-4">1024 x 1024 px.IMAGE(723KB)</span> */}
                                    <span>Contract Address</span>
                                    <h6 className="mb-4"><a role={'button'}>0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec</a></h6>
                                    <span>Token ID</span>
                                    <h6>100300524409</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-d-right mt-4 mt-lg-0">
                                <div className="pd-right-title">
                                    <h3>Abstract Painting</h3>
                                </div>
                                <div className="pd-right-mate">
                                    <h6>Contributes</h6>
                                    <a href="#" className="nft-like mx-2">
                                        {/* <i className="ri-heart-3-line"></i> */}
                                        <i className="ri-heart-3-fill"></i>
                                    </a>
                                    <div className="nft-share-dropdown ant-dropdown-sm">
                                        <Dropdown overlay={
                                            <Menu>
                                                <Menu.Item key="0">
                                                    <a role={'button'}><i className="ri-telegram-line me-2"></i>Telegram</a>
                                                </Menu.Item>
                                                <Menu.Item key="1">
                                                    <a role={'button'}><i className="ri-twitter-line me-2"></i>Twitter</a>
                                                </Menu.Item>
                                                <Menu.Item key="1">
                                                    <a role={'button'}><i className="ri-mail-line me-2"></i>Email</a>
                                                </Menu.Item>
                                            </Menu>
                                        } placement="bottomRight" trigger={['click']} getPopupContainer={node => node.parentNode}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}><i className="ri-share-fill"></i></a>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="pd-right-creator">
                                    <ul>
                                        <li>
                                            <div className="creator-icon">
                                                <img src={Avatar} className="img-fluid" alt="" />
                                            </div>
                                            <div className="creator-info">
                                                <span>Creator</span>
                                                <h5><a role={'button'}>@james_195</a></h5>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="creator-icon">
                                                <img src={Avatar} className="img-fluid" alt="" />
                                            </div>
                                            <div className="creator-info">
                                                <span>Owner</span>
                                                <h5><a role={'button'}>@james_195</a></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="pd-right-content">
                                    <p>The painting generated by AI.</p>
                                    <p>Collection: AI Art Key. 1/1</p>
                                    <p>Income from the sales of AI paintings will partly support our new project AI Metaverse. After launching the AP Metaverse, the painting becomes a key to exclusive artefacts in...</p>
                                </div>
                                <div className="pd-right-pricetime">
                                    <div className="pd-right-price">
                                        <label>Price</label>
                                        <div className="pd-right-price-tag">
                                            <h5>205 ETH <span>≈ $ 204.90</span></h5>
                                        </div>
                                    </div>
                                    <div className="pd-right-time">
                                        <label>Ends in</label>
                                        <div className="timecuntdown">
                                            <Countdown date={Date.now() + 500000} renderer={renderer}></Countdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd-right-buybtn mb-4 mb-xl-5">
                                    <a role={'button'} onClick={CheckoutModalOpenEvent} className="btn-theme btn-theme-color">Buy Now</a>
                                </div>
                                <div className="nft-detail-history">
                                    <div className="nft-detail-title">
                                        <h5>History</h5>
                                    </div>
                                    <div className="nft-d-history-content">
                                        <div className="row">
                                            {[1,2,3,4,5,6].map((data, index)=> {
                                                return (
                                                    <div className="col-sm-6" key={index}>
                                                        <div className="nft-d-history-col mb-20 d-flex">
                                                            <div className="nft-d-history-left">
                                                                <img src={Avatar} className="img-fluid" alt="" />
                                                            </div>
                                                            <div className="nft-d-history-right">
                                                                <h4>Purchased by <strong>@HolyNft</strong></h4>
                                                                <span>18/01/2022</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Checkout CheckoutModalOpen={CheckoutModalOpen} CheckoutModalCloseEvent={CheckoutModalCloseEvent} />
        </>
    )
}
export default NFTDetail;
