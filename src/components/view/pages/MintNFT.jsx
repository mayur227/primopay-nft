import React from 'react';
import { Divider } from 'antd';
import { Link } from 'react-router-dom';
import MintYourNFT from './MintYourNFT';

const MintNFT = () => {

    return(
        <>
            <div className="page-wrapper pb60">
                <div className="container">
                    <div className="page-title text-center ">
                        <h2>Mint NFT</h2>
                    </div>

                    <MintYourNFT/>

                    {/* <div className="row justify-content-center">
                        <div className="col-6 col-lg-3">
                            <div className="mint-nft-col">
                                <div className="mintnft-c-icon">
                                    <i className="ri-edit-2-line"></i>
                                </div>
                                <h6>Mint Your NFT</h6>
                                <Divider/>
                                <Link to={'/mint-your-nft'} className="btn-theme btn-theme-color font-bold">Mint Now</Link>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="mint-nft-col">
                                <div className="mintnft-c-icon">
                                    <i className="ri-add-circle-line"></i>
                                </div>
                                <h6>Create Your Own NFT</h6>
                                <Divider/>
                                <Link to={'/create-nft'} className="btn-theme btn-theme-color font-bold">Create Now</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default MintNFT;
