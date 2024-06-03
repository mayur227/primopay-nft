import React from 'react';
import SideMenu from '../../../common/userpanel/SideMenu';
import IdCardImg from '../../../../../assets/images/security/idcard.svg';
import SecImg2 from '../../../../../assets/images/security/google_authenticator.svg';
import SecImg3 from '../../../../../assets/images/security/phone_verification.svg';
import SecImg4 from '../../../../../assets/images/security/mail_verification.svg';
import { Link } from 'react-router-dom';

const Security = (props) => {

    return (
        <>
            <div className="usercenter-wrapper">
                <div className="container">
                    <div className="usercenter-page-title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="sidebar-layout-page pb80">
                        <SideMenu />
                        <div className="sidebar-content">
                            <div className='sidebar-content-view h-100'>
                                <div className="security-content">
                                    {/* <div className="page-sub-heading px-0 pt-0">
                                        <div className="page-sub-title button-with-title">
                                            <h2>User Profile</h2>
                                        </div>
                                    </div> */}
                                    <div className="user-id-box">
                                        <div className="user-id-card">
                                            <img src={IdCardImg} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-id-info">
                                            <h6>John Doe</h6>
                                            <p>ID : 6320918574</p>
                                            <p>
                                                Status :
                                                <span className='badge bg-success ms-2'><i className="ri-check-line me-1 align-middle"></i>Verified</span>
                                                {/* <span className='badge bg-danger ms-2'><i className="ri-close-line me-1 align-middle"></i>unverified</span> */}
                                            </p>
                                            <div className="rating-stars">
                                                <i className="ri-star-fill active"></i>
                                                <i className="ri-star-fill active"></i>
                                                <i className="ri-star-fill active"></i>
                                                <i className="ri-star-fill active"></i>
                                                <i className="ri-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <div className="vrf-box">
                                            <div className="vrf-left">
                                                <div className="vrf-data-box">
                                                    <div className="vrf-icn">
                                                        <img src={SecImg2} alt="" />
                                                    </div>
                                                    <div className="vrf-text">
                                                        <h6>Google Authentication</h6>
                                                        <p>Use Google Authentication to protect your account and transactions.</p>
                                                        {/* <a type="button" className="anchor-link">Having trouble?</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vrf-right">
                                                <div className="vrf-right-one">
                                                    <div className="vrf-tr-fl">
                                                        <i className="ri-close-line cls-icon"></i>
                                                        <span>unset</span>
                                                    </div>
                                                </div>
                                                <div className="vrf-right-two">
                                                    <Link to={'/usercenter/setting/google-verify'} className="vrf-btn btn-theme btn-theme-primary">Enable</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vrf-box">
                                            <div className="vrf-left">
                                                <div className="vrf-data-box">
                                                    <div className="vrf-icn">
                                                        <img src={SecImg3} alt="" />
                                                    </div>
                                                    <div className="vrf-text">
                                                        <h6>Phone Number Verification</h6>
                                                        <p>Protect your account and transactions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vrf-right">
                                                <div className="vrf-right-one">
                                                    <div className="vrf-tr-fl">
                                                        <i className="ri-check-line open-icon"></i>
                                                        <span>+918********999</span>
                                                    </div>
                                                </div>
                                                <div className="vrf-right-two">
                                                    <Link to={'/usercenter/setting/phone-change'} className="vrf-btn btn-theme btn-theme-primary">Enable</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vrf-box">
                                            <div className="vrf-left">
                                                <div className="vrf-data-box">
                                                    <div className="vrf-icn">
                                                        <img src={SecImg4} alt="" />
                                                    </div>
                                                    <div className="vrf-text">
                                                        <h6>Email Address Verification</h6>
                                                        <p>Protect your account and transactions.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="vrf-right">
                                                <div className="vrf-right-one">
                                                    <div className="vrf-tr-fl">
                                                        <i className="ri-check-line open-icon"></i>
                                                        <span>ma***@elaunchinfotech.in</span>
                                                    </div>
                                                </div>
                                                <div className="vrf-right-two">
                                                    <Link to={'/usercenter/setting/email-change'} className="vrf-btn btn-theme btn-theme-primary mb-1">Change</Link>
                                                    <button className="vrf-btn btn-theme btn-red mb-1">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Security;
