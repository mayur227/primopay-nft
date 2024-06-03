import React, { useState } from 'react';
import { Divider, Input, Steps, Tooltip } from 'antd';
import Countdown from 'react-countdown';
import SideMenu from '../../../common/userpanel/SideMenu';

import playstore from '../../../../../assets/images/play-store.png';
import appstore from '../../../../../assets/images/app-store.png';
import Qrcode from '../../../../../assets/images/qrcode.png';

const { Step } = Steps;
const steps = [
    {title: 'Download App'},
    {title: 'Scan QR Code'},
    {title: 'Backup Key'},
    {title: 'Enabled Google authenticator'},
];

const GoogleVerify = (props) => {

    

    // Steps
    const [currentStep, setCurrentStep] = useState(0);
    const next = () => {
        setCurrentStep(currentStep + 1);
      };
    
    const prev = () => {
        setCurrentStep(currentStep - 1);
    };
    const customDot = (dot, {index}) => (
        <>
            <div className="step-number">
                {index+1}
            </div>
            <p>{dot}</p>
        </>
    );

    // Renderer callback with condition
    const timerdata = ({ hours, minutes, seconds, completed }) => {
        if (seconds < 10) {
            seconds = `0${seconds}`;
        };
        if (minutes < 10) {
            minutes = `0${minutes}`;
        };
        if (completed) {
            // Render a completed state
            return <button type="button" className="send-code-link">Resend Code</button>;
        } else {
            // Render a countdown
            return (
                <span className="code-timer">({minutes}:{seconds})</span>
            );
        }
    };

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
                                            <h2>Google Authenticator</h2>
                                        </div>
                                    </div>
                                    <div className="google-verify-part">
                                        <Steps progressDot={customDot} size="small" current={currentStep}>
                                            {steps.map(item => (
                                                <Step key={item.title} title={item.title} />
                                            ))}
                                        </Steps>
                                        <Divider className='m-0 d-md-none'/>
                                        <div className="steps-content">
                                            <div className={`google-verify-step ${ currentStep === 0 ? "active" : ""}`}>
                                                <h5>Download App</h5>
                                                <div className='mt-4'>
                                                    <p>Download and install the Google Authenticator app</p>
                                                    <ul className='d-flex app-download-img'>
                                                        <li><a role={'button'}><img src={playstore} className="img-fluid" alt="play store" /></a></li>
                                                        <li><a role={'button'}><img src={appstore} className="img-fluid" alt="app store" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className={`google-verify-step ${currentStep === 1 ? "active" : ""}`}>
                                                <h5>Step 2 : Scan QR Code</h5>
                                                <div className='mt-4'>
                                                    <p>Scan this QR code in the Google Authenticator app</p>
                                                    <div className="gle-step-box">
                                                        <div className="gle-barcode">
                                                            <div className="barcode-box">
                                                                <img src={Qrcode} className="img-fluid" alt="" />
                                                            </div>
                                                            <div className="gle-copy-box">
                                                                <div className="form-group simple-group copy-group">
                                                                    <label className="label-name mb-4">If you are unable to scan the QR code, please enter this code manually into the app.</label>
                                                                    <Input className="input-control" placeholder="CJRUW2NY3Q77B3N3" value="CJRUW2NY3Q77B3N3" suffix={<Tooltip title="Copy"><button className="copy-icon-btn" type="button"><i className="ri-file-copy-2-fill"></i></button></Tooltip>} disabled />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`google-verify-step ${currentStep === 2 ? "active" : ""}`}>
                                                <h5>Step 3 : Backup Key</h5>
                                                <div className='mt-4'>
                                                    <p>Please save this Key on paper. This Key will allow you to recover your Google Authenticator in case of phone loss.</p>
                                                    <div className="gle-step-box">
                                                        <h5 className="gle-small-title">Resetting your Google Authentication requires opening a support ticket and takes at least 7 days to process.</h5>
                                                        <div className="gle-copy-box">
                                                            <div className="form-group simple-group copy-group">
                                                                <Input className="input-control" placeholder="CJRUW2NY3Q77B3N3" value="CJRUW2NY3Q77B3N3" suffix={<Tooltip title="Copy"><button className="copy-icon-btn" type="button"><i className="ri-file-copy-2-fill"></i></button></Tooltip>} disabled />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`google-verify-step ${currentStep === 3 ? "active" : ""}`}>
                                                <h5>Step 4 : Enabled Google authenticator</h5>
                                                <div className='mt-4'>
                                                    <p>Please save this Key on paper. This Key will allow you to recover your Google Authenticator in case of phone loss.</p>
                                                    <div className="gle-step-box">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="label-name label-flex">
                                                                        <span>E-mail verification code</span>
                                                                        <Tooltip title="Haven’t received code? The code will expire after 10 mins.">
                                                                            <span className="code-sent-info">
                                                                                <span className="small-info">Verification code sent <Countdown date={Date.now() + 600000} renderer={timerdata} /></span>
                                                                                <i className="ri-information-line info-tooltip"></i>
                                                                            </span>
                                                                        </Tooltip>
                                                                    </label>
                                                                    <div className="verification-group code-group">
                                                                        <Input className="form-control" placeholder="Enter email address"/>
                                                                        <button type="button" className="code-link">Get Code</button>
                                                                        {/* <button type="button" className="code-link">Resend</button> */}
                                                                    </div>
                                                                    <div className="form-text">Enter the 6 digit code received by Email abc******@abc.com</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group">
                                                                    <label className="label-name label-flex">
                                                                        <span>Google verification code</span>
                                                                    </label>
                                                                    <Input className="form-control" placeholder="Enter Code"/>
                                                                    <div className="form-text">Enter the 6 digit code from Google Authenticator.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Divider/>
                                        <div className="col-footer-part steps-action d-flex">
                                            {currentStep > 0 && (
                                                <a role="button" className="btn-theme btn-theme-primary" onClick={() => prev()}>Previous Step</a>
                                            )}
                                            {currentStep < steps.length - 1 && (
                                                <a role="button"  onClick={() => next()} className="btn-theme btn-theme-primary ms-auto">Next Step</a>
                                            )}
                                            {currentStep === steps.length - 1 && (
                                                <a role="button" className="btn-theme btn-theme-color font-semibold ms-auto">Submit</a>
                                            )}
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
export default GoogleVerify;
