import React, { useState } from 'react';
import { Radio, Input } from 'antd';
import { Link } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";
import ProductCard from '../common/ProductCard';
// import parrot from '../../../assets/images/parrot.jpg';
import defaultparrot from '../../../assets/images/parrot-bg/defaultparrot.png';
import parrotbg1 from '../../../assets/images/parrot-bg/bg-1.jpg';
import parrotbg2 from '../../../assets/images/parrot-bg/bg-2.jpg';
import parrotbg3 from '../../../assets/images/parrot-bg/bg-3.jpg';
import parrotbg4 from '../../../assets/images/parrot-bg/bg-4.jpg';
import parrotbg5 from '../../../assets/images/parrot-bg/bg-5.jpg';
import parrotbg6 from '../../../assets/images/parrot-bg/bg-6.jpg';
import parrotbg7 from '../../../assets/images/parrot-bg/bg-7.jpg';
import parrotbg8 from '../../../assets/images/parrot-bg/bg-8.jpg';
import parrotbg9 from '../../../assets/images/parrot-bg/bg-9.jpg';
import parrotbg10 from '../../../assets/images/parrot-bg/bg-10.jpg';

import pc1 from '../../../assets/images/product/18.jpg';

const { TextArea } = Input;

const CreateNFT = () => {
    const { register, formState: { errors }, handleSubmit, reset, control } = useForm();

    const [statusValue, setStatusValue] = useState(1);

    const onChangeStatus = e => {
        setStatusValue(e.target.value);
    };

    const parrotbg = [
        { imgpath: `${parrotbg1}` },
        { imgpath: `${parrotbg2}` },
        { imgpath: `${parrotbg3}` },
        { imgpath: `${parrotbg4}` },
        { imgpath: `${parrotbg5}` },
        { imgpath: `${parrotbg6}` },
        { imgpath: `${parrotbg7}` },
        { imgpath: `${parrotbg8}` },
        { imgpath: `${parrotbg9}` },
        { imgpath: `${parrotbg10}` }
    ];

    const [parrotbgImg, setParrotBgImg] = useState();

    const parrotbgChange = (e, imgpath) => {
        setParrotBgImg(imgpath);
    }


    return(
        <>
            <div className="page-wrapper">
                <div className="pb60">
                    <div className="container">
                        <div className="back-page-link">
                            <Link to={'/mint-nft'} className="btn-theme">Back</Link>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-11 col-xxl-9'>
                                <form>
                                    <div className="mint-y-nft-form mb-4 mb-xl-5">
                                        <h4>Create Your Own NFT</h4>
                                        <div className="mint-y-nft-part">
                                            <h5 className='mint-y-subtitle'>Select Status</h5>
                                            <div className="form-group">
                                                <div className="radio-button-group">
                                                    <Radio.Group onChange={onChangeStatus} value={statusValue} buttonStyle="solid">
                                                        <Radio.Button value={1}>Happy</Radio.Button>
                                                        <Radio.Button value={2}>Sad</Radio.Button>
                                                        <Radio.Button value={3}>Angry</Radio.Button>
                                                    </Radio.Group>
                                                </div>
                                            </div>
                                            <h5 className='mint-y-subtitle'>Image</h5>

                                            <div className='row'>
                                                <div className='col-lg-6'>
                                                    <div className='mint-parrot-preview form-group' style={{backgroundImage:`url('${parrotbgImg}')`}}>
                                                        <img src={defaultparrot} className="img-fluid" alt='parrot' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='mint-parrot-right mb-30'>
                                                        <div className="color-selection-group">
                                                            {parrotbg.map((data, index) => {
                                                                return (
                                                                    <div className="color-radio-box" key={index}>
                                                                        <input type="radio" className="color-input" name="parrotcolorvalue" id={`parrotcolor${index}`} value={`parrotcolor${index}`} />
                                                                        <label htmlFor={`parrotcolor${index}`} className={`color-label`} style={{backgroundImage:`url('${data.imgpath}')`}} onClick={(e)=> parrotbgChange(e, data.imgpath)}></label>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label className="label-name d-block">Name</label>
                                                <Controller
                                                    name="name"
                                                    id="name"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input {...field} placeholder="Name" className="form-control" id="name" />
                                                    )}
                                                    rules={{
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                            
                                            <div className="form-group">
                                                <label className="label-name d-block">Price</label>
                                                <Controller
                                                    name="fee"
                                                    id="fee"
                                                    control={control}
                                                    render={({ field }) => (
                                                        <Input {...field} placeholder="The First 10 Mint pens are free" className="form-control" id="fee" />
                                                    )}
                                                    rules={{
                                                        required: true,
                                                    }}
                                                />
                                            </div>
                                            <div className='text-center'>
                                                <button type="submit" className="btn-theme btn-theme-color font-bold">Create Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-lg-10'>
                                <div className="mint-y-nft-part">
                                    <div className='row'>
                                        <div className='col-md-6 col-xl-4'>
                                            <div className="mint-y-nft-card">
                                                <ProductCard  nftimg={pc1} />
                                            </div>
                                        </div>
                                        <div className='col-md-6 col-xl-8'>
                                            <div className='mint-y-nft-minting'>
                                                <h6>Minting Completed</h6>
                                                <span>Contract Address</span>
                                                <h5 className="mb-4">0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec</h5>
                                                <span>Token ID</span>
                                                <h5>100300524409</h5>
                                                <div className="minting-y-btn">
                                                    <a role={'button'} className="btn-theme nft-asset-btn font-bold me-2 mb-2">NFT Asset</a>
                                                    <a role={'button'} className="btn-theme btn-theme-color font-bold mb-2">List NFT</a>
                                                </div>   
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
export default CreateNFT;
