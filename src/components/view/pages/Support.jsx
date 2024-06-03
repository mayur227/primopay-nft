import React from 'react';
import { Link } from 'react-router-dom';

const Support = (props) => {
    return(
        <>
            <div className="page-wrapper pb60">
                <div className="container">
                    <div className="page-title text-center ">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="support-content">
                        <div className='row'>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/getting-started'} className='support-blck'>
                                    <i className="ri-settings-3-fill"></i>
                                    <h5>Getting Started</h5>
                                    <span>Learn how to create an account, set up your wallet, and what you can do on primopay nft</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/buying'} className='support-blck'>
                                    <i className="ri-shopping-bag-fill"></i>
                                    <h5>Buying</h5>
                                    <span>Learn how to purchase your first NFT, understand gas fees, and see what's gas free on primopay nft</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/selling'} className='support-blck'>
                                    <i className="ri-shopping-cart-2-fill"></i>
                                    <h5>Selling</h5>
                                    <span>Learn how list your NFTs for sale and understand the different ways to list your NFTs</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/creating'} className='support-blck'>
                                    <i className="ri-add-box-fill"></i>
                                    <h5>Creating</h5>
                                    <span>Learn how to create your first NFT and how to create NFT collections</span>
                                </Link>
                            </div>

                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/my-account'} className='support-blck'>
                                    <i className="ri-user-fill"></i>
                                    <h5>My Account</h5>
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/wallet'} className='support-blck'>
                                    <i className="ri-wallet-3-fill"></i>
                                    <h5>Wallet</h5>
                                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/faq'} className='support-blck'>
                                    <i className="ri-question-answer-fill"></i>
                                    <h5>FAQ</h5>
                                    <span>Learn answers to frequently asked questions on primopay nft</span>
                                </Link>
                            </div>
                            <div className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={'/support/user-safety'} className='support-blck'>
                                    <i className="ri-shield-user-fill"></i>
                                    <h5>User Safety</h5>
                                    <span>Learn more about anti-fraud and user safety processes on primopay nft </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support;