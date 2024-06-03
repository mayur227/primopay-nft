import React, { useState } from 'react';
import { Checkbox, Input, Upload, Select } from 'antd';
import { Link } from 'react-router-dom'
import { useForm, Controller } from "react-hook-form";
import ProductCard from '../common/ProductCard';

import pc1 from '../../../assets/images/product/18.jpg';

const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const MintYourNFT = () => {
    const { register, formState: { errors }, handleSubmit, reset, control } = useForm();

    const [fileImgList, setFileImgList] = useState([]);
    const handleChangeEventImgupload = ({ fileList: newfileimgList }) => {
        setFileImgList(newfileimgList);
    };
    const onPreviewEventImg = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };
    const beforeUploadEventImg = async file => {
        setFileImgList([...file.fileImgList, file]);
        
        return false;
    }

    // const props = {
    //     name: 'file',
    //     multiple: false,
    //     // action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    //     onChange(info) {
    //         const { status } = info.file;
    //         if (status !== 'uploading') {
    //             console.log(info.file, info.fileList);
    //         }
    //         if (status === 'done') {
    //             message.success(`${info.file.name} file uploaded successfully.`);
    //         } else if (status === 'error') {
    //             message.error(`${info.file.name} file upload failed.`);
    //         }
    //     },
    //     onDrop(e) {
    //         console.log('Dropped files', e.dataTransfer.files);
    //     },
    // };

    return (
        <>
            <div className="page-wrapper pt-0">
                <div className="container">
                    {/* <div className="back-page-link">
                        <Link to={'/mint-nft'} className="btn-theme">Back</Link>
                    </div> */}
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <form>
                                <div className="mint-y-nft-form mb-4 mb-xl-5">
                                    {/* <h4>Mint Your NFT</h4> */}
                                    <div className="mint-y-nft-part">
                                        <h5 className='mint-y-subtitle'>Preview</h5>
                                        <div className="form-group mint-upload-img">
                                            <Upload
                                                id="mint_img_upload"
                                                name="mint_img_upload"
                                                listType="picture-card"
                                                fileList={fileImgList}
                                                onChange={handleChangeEventImgupload}
                                                onPreview={onPreviewEventImg}
                                                beforeUpload={beforeUploadEventImg}
                                                accept='image/*'
                                                showUploadList={{ showPreviewIcon: false, removeIcon: <i className="ri-close-line text-white"></i> }}
                                            >
                                                    {fileImgList.length < 1 && 
                                                        <div className="upload-image-box">
                                                            <p className="ant-upload-drag-icon"><i className="ri-file-upload-line"></i></p>
                                                            <p className="ant-upload-text">Upload image</p>
                                                            <p className="ant-upload-hint">Choose your file to upload</p>
                                                            <p className="ant-upload-hint">(PNG, GIF, WEBP, MP4. Max 5 Mb.)</p>
                                                        </div>
                                                    }
                                            </Upload>
                                        </div>
                                        <h5 className='mint-y-subtitle'>Collection Type</h5>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className="form-group">
                                                    <Checkbox>Single</Checkbox>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="form-group">
                                                    <label className="label-name d-block">Categories</label>
                                                    <div className="select-dropdown">
                                                        <Select allowClear={true} clearIcon={<i className="ri-close-fill"></i>} suffixIcon={<i className="ri-arrow-down-s-line"></i>} className="select-control" getPopupContainer={node => node.parentNode} placeholder="Select Categories" >
                                                            <Option value="1"><div className="double-cryp">Art</div></Option>
                                                            <Option value="2"><div className="double-cryp">Collectibles</div></Option>
                                                            <Option value="3"><div className="double-cryp">Music</div></Option>
                                                            <Option value="4"><div className="double-cryp">Photography</div></Option>
                                                            <Option value="5"><div className="double-cryp">Sports</div></Option>
                                                            <Option value="6"><div className="double-cryp">Trading Cards</div></Option>
                                                            <Option value="7"><div className="double-cryp">Utility</div></Option>
                                                            <Option value="8"><div className="double-cryp">Virtual Worlds</div></Option>
                                                        </Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
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
                                            </div>
                                            <div className='col-md-4'>
                                                <div className="form-group">
                                                    <label className="label-name d-block">Fee</label>
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
                                            </div>
                                            <div className='col-12'>
                                                <div className="form-group">
                                                    <label className="label-name d-block">Discription (option)</label>
                                                    <Controller
                                                        name="discription"
                                                        id="discription"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <TextArea {...field} style={{ height: 120 }} placeholder="This is Title" className="form-control" id="discription" />
                                                        )}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
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
        </>
    )
}
export default MintYourNFT;
