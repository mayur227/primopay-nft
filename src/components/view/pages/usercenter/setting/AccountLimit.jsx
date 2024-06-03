import React, { useState } from 'react';
import SideMenu from '../../../common/userpanel/SideMenu';
import NFTEditLimitModal from '../../../modals/NFTEditLimitModal';

const AccountLimit = (props) => {

     // Modal
     const [NFTLimitModalOpen, SetNFTLimitModalOpen] = useState(false);
     const NFTLimitModalOpenEvent = () => {
         SetNFTLimitModalOpen(true);
         setTimeout(() => {
             document.getElementsByClassName('ant-modal-wrap')[0].scrollTo(0, 0);
         }, 0)
     };
     const NFTLimitModalCloseEvent = () => {
         SetNFTLimitModalOpen(false);
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
                                <div className="account-limit-box">
                                    <div className="vrf-box">
                                        <div className="vrf-left">
                                            <div className="vrf-data-box">
                                                <div className="vrf-text">
                                                    <p>Daily Remaining Purchase Limit</p>
                                                    <h6>1,000.00 USD</h6>
                                                    <h5>= 1,000.00 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vrf-box">
                                        <div className="vrf-left">
                                            <div className="vrf-data-box">
                                                <div className="vrf-text">
                                                    <p>Daily Remaining Purchase Limit</p>
                                                    <h6>1,000.00 USD</h6>
                                                    <h5>= 1,000.00 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vrf-right">
                                            <div className="vrf-right-two">
                                                <button className="vrf-btn btn-theme btn-green" onClick={NFTLimitModalOpenEvent}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vrf-box">
                                        <div className="vrf-left">
                                            <div className="vrf-data-box">
                                                <div className="vrf-text">
                                                    <p>Daily Remaining Purchase Limit</p>
                                                    <h6>1,000.00 USD</h6>
                                                    <h5>= 1,000.00 USD</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vrf-right">
                                            <div className="vrf-right-two">
                                                <button className="vrf-btn btn-theme btn-green" onClick={NFTLimitModalOpenEvent}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NFTEditLimitModal NFTLimitModalCloseEvent={NFTLimitModalCloseEvent} NFTLimitModalOpen={NFTLimitModalOpen} />
        </>
    )
}
export default AccountLimit;
