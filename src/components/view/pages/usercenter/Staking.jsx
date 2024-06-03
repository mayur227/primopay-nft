import React from 'react';
import SideMenu from '../../common/userpanel/SideMenu';
import ProductCard from '../../common/ProductCard';
import NoDataLoader from '../../common/NoDataLoader';
import { Accordion } from 'react-bootstrap';
import { Dropdown, Menu } from 'antd';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const Staking = (props) => {

    const addStaking = () => {
        Swal.fire({
            title: 'Add Staking Pool',
            text: "You want to add this NFT in Staking Pool?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2DCCD4',
            cancelButtonColor: '#ED4337',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {}
        })
    }
    const removeStaking = () => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#2DCCD4',
        //     cancelButtonColor: '#ED4337',
        //     confirmButtonText: 'Yes',
        //     cancelButtonText: 'No',
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //     }
        // })

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    

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
                                <div className='staking-content'>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <div className='staking-heading'>
                                                    <div className='staking-heading-left'>
                                                        <div className='token-name-part'>
                                                            <div className='staking-lable'>Staking Pool</div>
                                                            <div className='staking-token-name'>0.4213 <span className='text-uppercase'>ETH</span></div>
                                                        </div>
                                                        <ul className='staking-heading-th'>
                                                            <li>
                                                                <div className='staking-lable'>APR</div>
                                                                <div className='staking-token-name'>156%</div>
                                                            </li>
                                                            <li>
                                                                <div className='staking-lable'>Reward</div>
                                                                <div className='staking-token-name'>$ 400 K</div>
                                                            </li>
                                                            <li>
                                                                <div className='staking-lable'>Earned</div>
                                                                <div className='staking-token-name text-theme-colors'>$ 2.6589</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='staking-heading-action'>
                                                        <a role={'button'} className="btn-theme btn-theme-primary btn-lg-theme" onClick={addStaking}><i className="ri-add-fill align-bottom me-2"></i>Add to Staking</a>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body className='p-0'>
                                                <div className="staking-content-row">
                                                    <div className='row'>
                                                        <div className='col-sm-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Staked Amount</label>
                                                                <h4>$ 0.00</h4>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Earning %</label>
                                                                <h4>0%</h4>
                                                            </div>
                                                        </div>
                                                        <div className='col-sm-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Earnings</label>
                                                                <h4 className='text-theme-color-2'>$ 0.00</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex flex-wrap align-items-center staking-bm-detail'>
                                                        <h6>NFT Detail : Abstract Painting</h6>
                                                        {/* <div className='staking-content-action position-relative ms-auto'>
                                                            <Dropdown overlay={
                                                                <Menu className="more-dropdown-menu custom-scrollbar">
                                                                    <Menu.Item key="stakingkey1"><a role={'button'} onClick={removeStaking}>Remove Staking</a></Menu.Item>
                                                                    <Menu.Item key="stakingkey2"><Link to={'/usercenter/staking-earn-report'}>Earning Report</Link></Menu.Item>
                                                                </Menu>
                                                            } trigger={['click']} placement="bottomRight" getPopupContainer={node => node.parentNode}>
                                                                <a role={'button'} className="stak-more-btn"><i className="ri-more-fill"></i></a>
                                                            </Dropdown>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>
                                                <div className='staking-heading'>
                                                    <div className='staking-heading-left'>
                                                        <div className='token-name-part'>
                                                            <div className='staking-lable'>Staking Pool</div>
                                                            <div className='staking-token-name'>0.4213 <span className='text-uppercase'>BTC</span></div>
                                                        </div>
                                                        <ul className='staking-heading-th'>
                                                            <li>
                                                                <div className='staking-lable'>APR</div>
                                                                <div className='staking-token-name'>156%</div>
                                                            </li>
                                                            <li>
                                                                <div className='staking-lable'>Reward</div>
                                                                <div className='staking-token-name'>$ 400 K</div>
                                                            </li>
                                                            <li>
                                                                <div className='staking-lable'>Earned</div>
                                                                <div className='staking-token-name text-theme-colors'>$ 2.6589</div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className='staking-heading-action'>
                                                        <a role={'button'} className="btn-theme btn-theme-primary btn-lg-theme" onClick={addStaking}><i className="ri-add-fill align-bottom me-2"></i>Add to Staking</a>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body className='p-0'>
                                                <div className="staking-content-row">
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Staked Amount</label>
                                                                <h4>$ 24,100.00</h4>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Earning %</label>
                                                                <h4>0.0005%</h4>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-4'>
                                                            <div className="staking-content-col mb-4">
                                                                <label>Earnings</label>
                                                                <h4 className='text-theme-color-2'>$ 2.6589</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex flex-wrap align-items-center staking-bm-detail'>
                                                        <h6>NFT Detail : Abstract Painting</h6>
                                                        <div className='staking-content-action position-relative ms-auto'>
                                                            <Dropdown overlay={
                                                                <Menu className="more-dropdown-menu custom-scrollbar">
                                                                    <Menu.Item key="stakingkey1"><a role={'button'} onClick={removeStaking}>Remove Staking</a></Menu.Item>
                                                                    <Menu.Item key="stakingkey2"><Link to={'/usercenter/staking-earn-report'}>Earning Report</Link></Menu.Item>
                                                                </Menu>
                                                            } trigger={['click']} placement="bottomRight" getPopupContainer={node => node.parentNode}>
                                                                <a role={'button'} className="stak-more-btn"><i className="ri-more-fill"></i></a>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Staking;
