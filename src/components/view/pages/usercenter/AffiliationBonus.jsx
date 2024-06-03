import React from 'react';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import SideMenu from '../../common/userpanel/SideMenu';
import NoDataLoader from '../../common/NoDataLoader';

import Avatar from '../../../../assets/images/avatar.png';
import Ethereum from '../../../../assets/images/ic_ethereum.svg';

const AffiliationBonus = (props) => {

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
                                <div className="transaction-card-part mt-15">
                                    <div className="transaction-card-col tr-card-1">
                                        <h2>16.5%</h2>
                                        <Link to={'/usercenter/annualized-income'} className='text-theme-color'>Annualized Incomes</Link>
                                    </div>
                                    <div className="transaction-card-col tr-card-2 d-inline-flex align-items-center bg-gray-light text-start">
                                        <div className='transaction-icons'>
                                            <img src={Ethereum} className="img-fluid" alt="" />
                                        </div>
                                        <div className='transaction-coin'>
                                            <h6>Ethereum</h6>
                                            <h5>4,820.45<span>(ETH)</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <Divider className='mt-4' />
                                <div className='position-relative'>
                                    <div className='page-sub-heading px-0 pt-0'>
                                        <h2>Transaction</h2>
                                    </div>
                                    <div className='history-rightBtn'>
                                        <div className='table-margin-mins'>
                                            <div className="table-responsive custom-scrollbar">
                                                <table className="table nft-tableui text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>From</th>
                                                            <th>Amount</th>
                                                            <th>Date</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jane Cooper</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                            <td>Withdraw</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jenny Wilson</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                            <td>Withdraw</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Guy Hawkins</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                            <td>Withdraw</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='avatar-media'>
                                                                    <div className='avatar-media-img'>
                                                                        <img src={Avatar} className="img-fluid me-3" alt="" />
                                                                    </div>
                                                                    <h6>Jacob Jones</h6>
                                                                </div>
                                                            </td>
                                                            <td>123.12 ETH</td>
                                                            <td>Dec 30, 2019 05:18</td>
                                                            <td>Withdraw</td>
                                                        </tr>
                                                        {/* <tr>
                                                            <td colSpan="4">
                                                                <div className="no-data-found text-center">
                                                                    <NoDataLoader />
                                                                    <p>No Data Found</p>
                                                                </div>
                                                            </td>
                                                        </tr> */}
                                                    </tbody>
                                                </table>
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
export default AffiliationBonus;
