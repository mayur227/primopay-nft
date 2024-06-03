import React from "react";
import { Divider } from "antd";
import featureproduct from '../../../assets/images/product/19.jpg';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const {nftimg} = props;
    return(
        <>
            <div className="product-card">
                <div className="product-card-img">
                    <Link to={'/nft-detail'} className="d-block h-100">
                        <img src={nftimg} className="img-fluid" alt='' />
                    </Link>
                    <a role={'button'} className="link-view">
                        <i className="ri-heart-3-line"></i>
                        {/* <i className="ri-heart-3-fill"></i> */}
                        1.2k
                    </a>
                </div>
                <div className="product-card-content">
                    <h3><Link to={'/nft-detail'} className="d-block">Abstract Painting</Link></h3>
                    <div className="pc-stock-price">
                        <h6>4 in stock</h6>
                        <span>Price : <em className="">0.054 ETH</em></span>
                    </div>
                    <Divider className="mt-2 mb-3" />
                    <div className="pc-bottom">
                        <a role={'button'} className="pd-user">
                            <i className="ri-history-line"></i>
                            <h5>View History</h5>
                        </a>
                        <div className="pc-bid-btn">
                            <Link to={'/nft-detail'} className="btn-theme btn-theme-color btn-lg-theme font-semibold">Place Bid</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;