import React from 'react';
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import startsWith from 'lodash.startswith';
import SideMenu from '../../../common/userpanel/SideMenu';

const PhoneChangeVerification = (props) => {
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
                                            <h2>Phone Number Verification</h2>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="verification-part">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group flag-form-group">
                                                        <label className="label-name">Enter Phone No.</label>
                                                        <PhoneInput
                                                                country="in"
                                                                name="phone_no"
                                                                inputclassName="form-control"
                                                                enableSearch={true}
                                                                onChange={(value, country, e, formattedValue) => {
                                                                    
                                                                }}
                                                                isValid={(inputNumber, country, countries) => {
                                                                    return countries.some((country) => {
                                                                        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                                                                    });
                                                                }}
                                                            />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label className="label-name">
                                                            Phone Verification Code
                                                        </label>
                                                        <div className="verification-group code-group">
                                                            <Input className="form-control" placeholder="SMS OTP" />
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
                                                        <label className="label-name">E-mail verification code</label>
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
export default PhoneChangeVerification;
