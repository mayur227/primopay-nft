import React from 'react';
import { Select, DatePicker } from 'antd';
import SideMenu from '../../common/userpanel/SideMenu';
import NoDataLoader from '../../common/NoDataLoader';

const { Option } = Select;
const { RangePicker } = DatePicker;

const StakingEarnReport = (props) => {

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
                            <div className='sidebar-content-view'>
                                <div className="order-rightBtn position-relative">
                                    <div className="form-group me-2">
                                        <div className="select-dropdown select-dropdown-radius status-select-dropdown">
                                            <Select allowClear={true} clearIcon={<i className="ri-close-fill"></i>} suffixIcon={<i className="ri-arrow-down-s-line"></i>} className="select-control" getPopupContainer={node => node.parentNode} placeholder="Status" >
                                                <Option value="0"><div className="double-cryp">All</div></Option>
                                                <Option value="1"><div className="double-cryp">Pending</div></Option>
                                                <Option value="2"><div className="double-cryp">Completed</div></Option>
                                                <Option value="3"><div className="double-cryp">Failed</div></Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="datepicker-group rangepicker-style-1 order-rangePicker">
                                            <RangePicker className="input-control" format={'DD/MM/YYYY'} separator={<i className="ri-subtract-line"></i>} clearIcon={<i className="ri-close-fill"></i>} getPopupContainer={node => node.parentNode} suffixIcon={<i className="ri-calendar-2-fill"></i>} />
                                        </div>
                                    </div>
                                </div>
                                <div className='table-margin-mins'>
                                    <div className="table-responsive custom-scrollbar">
                                        <table className="table nft-tableui text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th>Coin</th>
                                                    <th>Amount</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colSpan="4">
                                                        <div className="no-data-found text-center">
                                                            {/* <Empty description={'No Data Found'} /> */}
                                                            <NoDataLoader />
                                                            <p>No Data Found</p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
export default StakingEarnReport;
