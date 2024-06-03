import React from 'react';
import SideMenu from '../../common/userpanel/SideMenu';
import ProductCard from '../../common/ProductCard';
import NoDataLoader from '../../common/NoDataLoader';

import pc1 from '../../../../assets/images/product/18.jpg';
import pc2 from '../../../../assets/images/product/35.jpg';
import pc3 from '../../../../assets/images/product/3.jpg';
import pc4 from '../../../../assets/images/product/19.jpg';
import pc5 from '../../../../assets/images/product/30.jpg';
import pc6 from '../../../../assets/images/product/28.jpg';
import pc7 from '../../../../assets/images/product/31.jpg';
import pc8 from '../../../../assets/images/product/36.jpg';
import pc9 from '../../../../assets/images/product/27.jpg';

const Favourite = (props) => {

    const productcardimg = [
        {imgpath:`${pc1}`},
        {imgpath:`${pc2}`},
        {imgpath:`${pc3}`},
        {imgpath:`${pc4}`},
        {imgpath:`${pc5}`},
        {imgpath:`${pc6}`},
        {imgpath:`${pc7}`},
        {imgpath:`${pc8}`},
        {imgpath:`${pc9}`}
    ];

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
                                <div className='favourite-card'>
                                    <div className="row">
                                        {productcardimg.map((items, index) => {
                                            return  <div className="col-12 col-md-6 col-xl-4" key={index}>
                                                        <ProductCard nftimg={items.imgpath} />
                                                    </div>
                                        })}
                                    </div>
                                </div>
                                {/* <div className="no-data-found text-center h-100 d-flex flex-column justify-content-center">
                                    <NoDataLoader />
                                    <p>No Data Found</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Favourite;
