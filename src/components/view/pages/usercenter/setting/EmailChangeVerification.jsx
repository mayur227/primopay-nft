import React from 'react';
import { Input } from 'antd';
import SideMenu from '../../../common/userpanel/SideMenu';

const EmailChangeVerification = (props) => {
    // const [isDefaultCountryCode, setIsDefaultCountryCode] = useState('ir');

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
                                    <div className="page-sub-heading px-0 pt-0 pb-20">
                                        <div className="page-sub-title button-with-title">
                                            <h2>New Email Verification</h2>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="verification-part">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group flag-form-group">
                                                        <label className="label-name">Enter New Email</label>
                                                        <Input className="form-control" placeholder="Enter Email" />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="label-name">New Email verification code</label>
                                                        <div className="verification-group code-group">
                                                            <Input className="form-control" placeholder="Email OTP" />
                                                            <button type="button" className="code-link">Get Code</button>
                                                            {/* <button type="button" className="code-link">Resend</button> */}
                                                        </div>
                                                        <div className="form-text">Enter the 6 digit code received by Email +nul********111.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="page-sub-heading px-0 pt-20 pb-20">
                                            <div className="page-sub-title button-with-title">
                                                <h2>Security Verification</h2>
                                            </div>
                                        </div>
                                        <div className="verification-part">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="label-name label-flex">E-mail verification code</label>
                                                        <div className="verification-group code-group">
                                                            <Input className="form-control" placeholder="Email OTP" />
                                                            <button type="button" className="code-link">Get Code</button>
                                                            {/* <button type="button" className="code-link">Resend</button> */}
                                                        </div>
                                                        <div className="form-text">Enter the 6 digit code received by use**@mailinator.com.</div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="label-name label-flex">
                                                            <span>SMS verification code</span>
                                                        </label>
                                                        <Input className="form-control" placeholder="Enter Code" />
                                                        <div className="form-text">Enter the 6 digit code received by +nul********111.</div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn-theme btn-theme-color">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EmailChangeVerification;
