import React from 'react';
import { Link } from 'react-router-dom';
import logowhitet from '../../../assets/images/logo/logo-white-t.svg';
const Footer = () => {
    return (
        <>
            <div className="footer-wrapper">
                <div className="footer-top-section pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-3"> 
                                <div className="footer-col">
                                    <div className="footer-about">
                                        <Link to='/' className="footer-logo">
                                            <img src={logowhitet} className="img-fluid" alt="" />
                                        </Link>
                                        <p>Primo Pay (since 2004) is an old and familiar name in electronic and digital currency exchange.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8 col-md-5 col-lg-5 col-xl-3">
                                <div className="footer-col">
                                    <div className="bottom-widget">
                                        <h4 className="widget-title">Marketplace</h4>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <ul className='footer-link'>
                                                    <li><Link to={'/marketplace'}><i className="ri-record-circle-fill"></i><span>All NFTs</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Art</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Collectibles</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Music</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Photography</span></Link></li>
                                                </ul>
                                            </div>
                                            <div className='col-6'>
                                                <ul className='footer-link'>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Sports</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Trading Cards</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Utility</span></Link></li>
                                                    <li><Link to={'/collection/art'}><i className="ri-record-circle-fill"></i><span>Virtual Worlds</span></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-3 col-xl-2">
                                <div className="footer-col">
                                    <div className="bottom-widget">
                                        <h4 className="widget-title">Company</h4>
                                        <ul className='footer-link'>
                                            <li><Link to='/'><i className="ri-record-circle-fill"></i><span>Home</span></Link></li>
                                            <li><Link to='/marketplace'><i className="ri-record-circle-fill"></i><span>Marketplace</span></Link></li>
                                            <li><Link to="/mint-nft"><i className="ri-record-circle-fill"></i><span>Mint NFT</span></Link></li>
                                            <li><Link to='/support'><i className="ri-record-circle-fill"></i><span>Support</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="footer-col">
                                    <div className="bottom-widget">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="address-data">
                                            {/* <li>
                                                <a role="button" className="address-link"><i className="ri-map-pin-2-fill"></i><span>Marzdaran, Sarsabz Jonoubi, Goldis 8, 4th floor, No 24, Tehran, Iran</span></a>
                                            </li> */}
                                            <li>
                                                <Link to="#" onClick={(e) => { window.location = 'tel:+982162836000'; e.preventDefault(); }} className="address-link"><i className="ri-phone-fill"></i><span>(+98) 2162836000</span></Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={(e) => { window.location = 'tel:+982162836000'; e.preventDefault(); }} className="address-link"><i className="ri-phone-fill"></i><span>(+98) 2162836000</span></Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={(e) => { window.location = 'mailto:support@primopaynft.com'; e.preventDefault(); }} className="address-link"><i className="ri-mail-fill"></i><span>sales@primopaynft.com</span></Link>
                                            </li>
                                            <li>
                                                <Link to="#" onClick={(e) => { window.location = 'mailto:support@primopaynft.com'; e.preventDefault(); }} className="address-link"><i className="ri-mail-fill"></i><span>support@primopaynft.com</span></Link>
                                            </li>
                                        </ul>
                                        <div className="footer-social">
                                            <ul>
                                                <li><a role="button" className="ft-social-icon"><i className="ri-facebook-circle-fill"></i></a></li>
                                                <li><a role="button" className="ft-social-icon"><i className="ri-twitter-fill"></i></a></li>
                                                <li><a role="button" className="ft-social-icon"><i className="ri-linkedin-box-fill"></i></a></li>
                                                <li><a role="button" className="ft-social-icon"><i className="ri-youtube-fill"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bm-section d-sm-flex text-center justify-content-between align-items-center flex-row-reverse py-3">
                            <ul className='d-flex justify-content-sm-end justify-content-center mb-3 mb-sm-0'>
                                <li><Link to={'/privacy-policy'} className='footer-bm-link'>Privacy Policy</Link></li>
                                <li><Link to={'/terms-conditions'} className='footer-bm-link'>Terms of Service</Link></li>
                            </ul>
                            <p>© {new Date().getFullYear()} PrimoPay NFT, Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;