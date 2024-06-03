import React from 'react';
import { Select, Divider, Tooltip } from 'antd';
import SideMenu from '../../../common/userpanel/SideMenu';

const { Option } = Select;

const Notification = (props) => {

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
                                <div className="page-sub-heading px-0 pt-0">
                                    <div className="page-sub-title button-with-title">
                                        <h2>Notification</h2>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                                    <p>This setting will impact notification language</p>
                                    <div className="form-group mb-0">
                                        <div className="select-dropdown select-dropdown-radius status-select-dropdown">
                                            <Select allowClear={true} clearIcon={<i className="ri-close-fill"></i>} suffixIcon={<i className="ri-arrow-down-s-line"></i>} className="select-control" getPopupContainer={node => node.parentNode} placeholder="Status" >
                                                <Option value="0">English</Option>
                                                <Option value="1">Turkish</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <Divider />
                                <div className="row justify-content-between">
                                    <div className="col-lg-8">
                                        <div className="sp-content mt-2">
                                            <h5>In-site Mail</h5>
                                            <p className="fs-14 mb-4">Once open it, you will receive in-site mail..</p>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="checklistdata1" />
                                                <label className="form-check-label" htmlFor="checklistdata1"><span className="me-2">Assets Changes</span><Tooltip  title="You will receive a notification when your NFT assets have changed and the transaction is successful."><i className="ri-information-line align-bottom"></i></Tooltip></label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="checklistdata2" />
                                                <label className="form-check-label" htmlFor="checklistdata2"><span className="me-2">List Notification</span><Tooltip  title="You will receive a notification when your NFT collection is on the shelves. You will also be notified of the review and sale status."><i className="ri-information-line align-bottom"></i></Tooltip></label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="checklistdata3" />
                                                <label className="form-check-label" htmlFor="checklistdata3"><span className="me-2">Delist Notification</span><Tooltip  title="You will receive notifications when your NFT assets are removed from the shelves. "><i className="ri-information-line align-bottom"></i></Tooltip></label>
                                            </div>
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="checklistdata4" />
                                                <label className="form-check-label" htmlFor="checklistdata4"><span className="me-2">Bidding Status</span><Tooltip  title="Upon placing a bid on an auctioned product, you will be notified on the bid status and receival of quotation. "><i className="ri-information-line align-bottom"></i></Tooltip></label>
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
export default Notification;
