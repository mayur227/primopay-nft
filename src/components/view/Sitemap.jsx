import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {

    return (
        <>
            <div className="page-wrapper sitemap-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sitemap-title">
                                <h3>Sitemap</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link target="_blank" to="/">Home</Link></li>
                                <li><Link target="_blank" to="/nft-detail">nft detail</Link></li>
                                <li><Link target="_blank" to="/marketplace">Marketplace</Link></li>
                                <li><Link target="_blank" to="/assets">All NFTs</Link></li>
                                <li><Link target="_blank" to="/mint-nft">mint nft</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link target="_blank" to="/collection/art">art</Link></li>
                                <li><Link target="_blank" to="/collection/creator-detail">creator detail</Link></li>
                                <li><Link target="_blank" to="/support">support</Link></li>
                                <li><Link target="_blank" to="/support/getting-started">support detail</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="sitemap-title">
                                <h3>User Panel</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link target="_blank" to="/usercenter/nft-assets">NFT assets</Link></li>
                                <li><Link target="_blank" to="/usercenter/wallet">My Wallet</Link></li>
                                <li><Link target="_blank" to="/usercenter/history/order">order</Link></li>
                                <li><Link target="_blank" to="/usercenter/staking">Staking</Link></li>
                                <li><Link target="_blank" to="/usercenter/favourite">favourite</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 mb-5">
                            <ul className="site-map-links">
                                <li><Link target="_blank" to="/usercenter/affiliation-bonus">affiliation bonus</Link></li>
                                <li><Link target="_blank" to="/usercenter/annualized-income">annualized income</Link></li>
                                <li><Link target="_blank" to="/usercenter/setting/basic">basic</Link></li>
                                <li><Link target="_blank" to="/usercenter/setting/account-limit">account limit</Link></li>
                                <li><Link target="_blank" to="/usercenter/setting/notification">notification</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="sitemap-title">
                                <h3>All Modals</h3>
                            </div>
                        </div>
                    </div> */}
                    
                    
                </div>
            </div>
        </>
    )
}
export default Sitemap;