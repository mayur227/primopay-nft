import React, { useState } from 'react';
import {  Tabs, Tooltip, Checkbox } from 'antd';
import SideMenu from '../../common/userpanel/SideMenu';
import NoDataLoader from '../../common/NoDataLoader';

const { TabPane } = Tabs;

const NFTAssets = (props) => {

    const [collectionNameGetSelect, setCollectionNameGetSelect] = useState([]);
    const [isCheckAll, setIsCheckAll] = useState(false);

    const handleChangeCollection = (event, id) => {
        if (!collectionNameGetSelect.includes(event.target.value)) {
            collectionNameGetSelect.push(event.target.value);
        } else {
            var index = collectionNameGetSelect.indexOf(event.target.value);
            if (index > -1) {
                collectionNameGetSelect.splice(index, 1);
            }
        }
    }
    return(
        <>
            <div className="usercenter-wrapper">
                <div className="container">
                    <div className="usercenter-page-title">
                        <h4>{props.title}</h4>
                    </div>
                    <div className='pb80'>
                        <div className="sidebar-layout-page">
                            <SideMenu />
                            <div className="sidebar-content">
                                <div className="sidebar-content-view pb-5 data-loader">
                                    <div className='nft-assets-tab'>
                                        <Tabs defaultActiveKey="1" className="button-tabs overflow-visible table-data-tabs position-relative">
                                            <TabPane tab="Collection (4)" key="1">
                                                <ul className="collection-rightBtn card-h-rightBtn">
                                                    <li>
                                                        <a role="button" className="btn-theme btn-green ms-2">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='me-2' xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12 2C6.48401 2 2 6.48398 2 12C2 17.516 6.48401 22 12 22C17.512 22 22 17.516 22 12C22 6.48398 17.512 2 12 2ZM17.668 13.392L13.848 17.544C13.772 17.628 13.664 17.672 13.556 17.672C13.508 17.672 13.456 17.664 13.408 17.644C13.256 17.584 13.156 17.436 13.156 17.272V15.432H6.624C6.4 15.432 6.224 15.252 6.224 15.032V13.12C6.224 12.9 6.4 12.72 6.624 12.72H17.376C17.532 12.72 17.676 12.816 17.74 12.96C17.804 13.104 17.776 13.276 17.668 13.392ZM17.776 10.88C17.776 11.1 17.596 11.28 17.376 11.28H6.624C6.46399 11.28 6.32 11.184 6.25601 11.04C6.19199 10.896 6.22 10.724 6.328 10.608L10.148 6.45601C10.26 6.33599 10.432 6.296 10.588 6.35601C10.74 6.41602 10.84 6.56396 10.84 6.72803V8.56797H17.376C17.596 8.56797 17.776 8.748 17.776 8.96797V10.88V10.88Z"/>
                                                            </svg>
                                                            <span>Transfer</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="button" className="btn-theme btn-theme-primary ms-2">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-2' xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.2301 5.29052V1.2815C9.2301 0.855229 9.5701 0.5 10.0001 0.5C10.3851 0.5 10.7113 0.798491 10.763 1.17658L10.7701 1.2815V5.29052L15.55 5.29083C17.93 5.29083 19.8853 7.23978 19.9951 9.67041L20 9.88609V14.9254C20 17.373 18.1127 19.3822 15.768 19.495L15.56 19.5H4.44C2.06 19.5 0.11409 17.5608 0.00483778 15.1213L0 14.9047V9.87576C0 7.4281 1.87791 5.40921 4.22199 5.29585L4.43 5.29083H9.23V11.6932L7.63 10.041C7.33 9.73119 6.84 9.73119 6.54 10.041C6.39 10.1959 6.32 10.4024 6.32 10.6089C6.32 10.7659 6.3648 10.9295 6.45952 11.0679L6.54 11.1666L9.45 14.1819C9.59 14.3368 9.79 14.4194 10 14.4194C10.1667 14.4194 10.3333 14.362 10.4653 14.2533L10.54 14.1819L13.45 11.1666C13.75 10.8568 13.75 10.3508 13.45 10.041C13.1773 9.75936 12.7475 9.73375 12.4462 9.96418L12.36 10.041L10.77 11.6932V5.29083L9.2301 5.29052Z"/>
                                                            </svg>
                                                            <span>Deposit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="button" className="btn-theme btn-blue-2 ms-2" >
                                                            <svg width="21" height="22" viewBox="0 0 21 22" fill="none" className='me-2' xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.390137 11.8979C0.390137 9.41533 2.38014 7.39062 4.83014 7.39062H9.62014V13.4953C9.62014 13.9328 9.96014 14.2787 10.3901 14.2787C10.8101 14.2787 11.1601 13.9328 11.1601 13.4953V7.39062L15.9401 7.39063C18.3901 7.39063 20.3901 9.41533 20.3901 11.9182V16.8732C20.3901 19.3659 18.4001 21.3906 15.9501 21.3906H4.84014C2.38014 21.3906 0.390137 19.3557 0.390137 16.863L0.390137 11.8979ZM6.94034 4.85043C6.63034 4.55043 6.63034 4.06042 6.93034 3.76043L9.84034 0.840425C9.99034 0.690426 10.1803 0.610426 10.3903 0.610426C10.5903 0.610426 10.7903 0.690426 10.9303 0.840425L13.8403 3.76043C13.9903 3.91043 14.0703 4.11042 14.0703 4.30042C14.0703 4.50043 13.9903 4.70043 13.8403 4.85043C13.5403 5.15042 13.0503 5.15042 12.7503 4.85043L11.1603 3.25043L11.1603 7.39042H9.62034L9.62034 3.25043L8.03034 4.85043C7.73034 5.15042 7.24034 5.15042 6.94034 4.85043Z"/>
                                                            </svg>
                                                            <span>Withdraw</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className='table-margin-mins'>
                                                    <div className="table-responsive custom-scrollbar">
                                                        <table className="table nft-tableui text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        <div className='text-center'>
                                                                            <Checkbox 
                                                                                id="multi_checkbox"
                                                                                name="multi_checkbox"
                                                                                value={isCheckAll} 
                                                                                onChange={(e) => { setIsCheckAll(!e.target.value ? true : false); !e.target.value ? setCollectionNameGetSelect([]) : console.log(e.target.value) }}
                                                                                checked={isCheckAll}
                                                                            ></Checkbox>
                                                                        </div>
                                                                    </th>
                                                                    <th>Collection</th>
                                                                    <th className="sorting-row ascending">Volume (USD) <Tooltip title="The volume of NFTs traded in marketplace for the series"><i className="ri-information-line icon-info align-bottom"></i></Tooltip></th>
                                                                    <th>Sales</th>
                                                                    <th>Items <Tooltip title="The number of NFTs in the series"><i className="ri-information-line icon-info align-bottom"></i></Tooltip></th>
                                                                    <th>Floor Price <Tooltip title="The lowest fixed price in marketplace"><i className="ri-information-line icon-info align-bottom"></i></Tooltip></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    [1,2,3,4,5].map((data, index)=>{
                                                                        return <tr key={index}>
                                                                                    <td>
                                                                                        <div className='text-center'>
                                                                                            <Checkbox 
                                                                                                id={`collection_name_${index}`} 
                                                                                                name={`collection_name_${index}`}
                                                                                                value={`collection_${index}`} 
                                                                                                onChange={(e) => handleChangeCollection(e, `collection_name_${index}`)}
                                                                                                checked={(isCheckAll === true || collectionNameGetSelect.includes(`collection_${index}`) === true ? true : false)}
                                                                                            ></Checkbox>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td>SYN CITY: Limited Blueprint</td>
                                                                                    <td>$ 19,084,324.79</td>
                                                                                    <td>18.446</td>
                                                                                    <td>8.000</td>
                                                                                    <td>$ 497.75</td>
                                                                                </tr>
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </TabPane>
                                            <TabPane tab="On sale (0)" key="2">
                                                <ul className="sale-rightBtn card-h-rightBtn">
                                                    <li>
                                                        <a role="button" className="btn-theme btn-blue-2 ms-2">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className='me-2' xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.2301 5.29052V1.2815C9.2301 0.855229 9.5701 0.5 10.0001 0.5C10.3851 0.5 10.7113 0.798491 10.763 1.17658L10.7701 1.2815V5.29052L15.55 5.29083C17.93 5.29083 19.8853 7.23978 19.9951 9.67041L20 9.88609V14.9254C20 17.373 18.1127 19.3822 15.768 19.495L15.56 19.5H4.44C2.06 19.5 0.11409 17.5608 0.00483778 15.1213L0 14.9047V9.87576C0 7.4281 1.87791 5.40921 4.22199 5.29585L4.43 5.29083H9.23V11.6932L7.63 10.041C7.33 9.73119 6.84 9.73119 6.54 10.041C6.39 10.1959 6.32 10.4024 6.32 10.6089C6.32 10.7659 6.3648 10.9295 6.45952 11.0679L6.54 11.1666L9.45 14.1819C9.59 14.3368 9.79 14.4194 10 14.4194C10.1667 14.4194 10.3333 14.362 10.4653 14.2533L10.54 14.1819L13.45 11.1666C13.75 10.8568 13.75 10.3508 13.45 10.041C13.1773 9.75936 12.7475 9.73375 12.4462 9.96418L12.36 10.041L10.77 11.6932V5.29083L9.2301 5.29052Z"/>
                                                            </svg>
                                                            <span>Deposit</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a role="button" className="btn-theme btn-green ms-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='me-2' viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22 8h-9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h9v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4zm-7 3h3v2h-3v-2z"/></svg>
                                                            <span>Wallet</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className='table-margin-mins'>
                                                    <div className="table-responsive custom-scrollbar">
                                                        <table className="table nft-tableui text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th>NFT</th>
                                                                    <th>Network</th>
                                                                    <th>Price</th>
                                                                    <th>Time</th>
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
                                            </TabPane>
                                            <TabPane tab="Bids (0)" key="3">
                                                <div className='table-margin-mins'>
                                                    <div className="table-responsive custom-scrollbar">
                                                        <table className="table nft-tableui text-nowrap">
                                                            <thead>
                                                                <tr>
                                                                    <th>Collection</th>
                                                                    <th>Price (USD)</th>
                                                                    <th>From</th>
                                                                    <th>To</th>
                                                                    <th>Expiration</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan="5">
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
                                            </TabPane>
                                        </Tabs>
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
export default NFTAssets;
