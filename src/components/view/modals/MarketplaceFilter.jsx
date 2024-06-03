import React, { useState } from 'react';
import { Modal, Input, Radio, Select } from 'antd';
import { Controller, useForm } from 'react-hook-form';
// import DataLoader from '../common/DataLoader';
const { Option } = Select;

const MarketplaceFilter = (props) => {
    const { mpFilterModalOpen, mpFilterModalCloseEvent} = props;
    const { register, formState: { errors }, handleSubmit, reset, control, setValue } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const [marketValue, setMarketValue] = useState(1);

    const onChangeMarket = e => {
        setMarketValue(e.target.value);
    };

    const [saleTypesValue, setsaleTypesValue] = useState(1);

    const onChangeSaleTypes = e => {
        setsaleTypesValue(e.target.value);
    };


    const [currenciesValue, setCurrenciesValue] = useState(1);

    const onChangeCurrencies = e => {
        setCurrenciesValue(e.target.value);
    };


    const onSubmit = (data) => {
        console.log(data);
        // setIsLoading(true);
    };

    return (
        <>
            <Modal visible={mpFilterModalOpen} width={375} centered footer={''} closable={false} onCancel={mpFilterModalCloseEvent} getPopupContainer={node => node.parentNode} className="cm-style-2">
                <div className="custom-modal">
                    <div className="custom-modal-header">
                        <h6 className="custom-modal-title">Filter</h6>
                        <button className="custom-modal-close" onClick={mpFilterModalCloseEvent}><i className="ri-close-fill"></i></button>
                    </div>
                    <div className="custom-modal-body data-loader">
                        {/* <DataLoader /> */}
                        <div className="custom-modal-filter px-4 pt-20 pb-20">
                            <div className='filter-from'>
                                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label className="label-name d-block">Market</label>
                                        <div className="radio-button-group">
                                            <Radio.Group onChange={onChangeMarket} value={marketValue} buttonStyle="solid">
                                                <Radio.Button value={1}>First Edition</Radio.Button>
                                                <Radio.Button value={2}>Resale</Radio.Button>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-name d-block">Sale Types</label>
                                        <div className="radio-button-group">
                                            <Radio.Group onChange={onChangeSaleTypes} value={saleTypesValue} buttonStyle="solid">
                                                <Radio.Button value={1}>Fixed Price</Radio.Button>
                                                <Radio.Button value={2}>Live Auction</Radio.Button>
                                            </Radio.Group>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label-name d-block">Currencies</label>
                                        <Radio.Group name="radiogroup" value={currenciesValue} onChange={onChangeCurrencies} defaultValue={1}>
                                            <Radio value={1}>BNB</Radio>
                                            <Radio value={2}>ETH</Radio>
                                            <Radio value={3}>BUSD</Radio>
                                        </Radio.Group>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <Input placeholder="BUSD Price" className="form-control" />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <Input placeholder="BUSD Price" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <Select
                                            placeholder="Recently listed"
                                            className="w-100"
                                            suffixIcon={<i className="ri-arrow-down-s-line"></i>}
                                            getPopupContainer={node => node.parentNode}
                                        >
                                            <Option value="ending-soon">Ending soon</Option>
                                            <Option value="price-low-high">Price low - high</Option>
                                            <Option value="price-high-low">Price high - low</Option>
                                            <Option value="most-favorited">Most favorited</Option>
                                        </Select>
                                    </div>
                                    <div className='d-flex'>
                                        <button className="btn-theme btn-theme-gray font-bold me-1 w-50">Reset</button>
                                        <button type="submit" className="btn-theme btn-theme-primary font-bold ms-1 w-50">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default MarketplaceFilter;