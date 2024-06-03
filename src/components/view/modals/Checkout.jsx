import React, { useState } from 'react';
import { Modal, Input, Divider } from 'antd';
import { Controller, useForm } from 'react-hook-form';
// import DataLoader from '../common/DataLoader';

const Checkout = (props) => {
    const { CheckoutModalOpen, CheckoutModalCloseEvent} = props;
    const { register, formState: { errors }, handleSubmit, reset, control, setValue } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        // setIsLoading(true);
    };

    return (
        <>
            <Modal visible={CheckoutModalOpen} width={500} centered footer={''} closable={false} onCancel={CheckoutModalCloseEvent} getPopupContainer={node => node.parentNode} className="cm-style-1">
                <div className="custom-modal">
                    <button className="custom-modal-close" onClick={CheckoutModalCloseEvent}><i className="ri-close-fill"></i></button>
                    <div className="custom-modal-row">
                        <div className="custom-modal-header">
                            <h6 className="custom-modal-title">Checkout</h6>
                        </div>
                    </div>
                    <div className="custom-modal-body data-loader">
                        {/* <DataLoader /> */}
                        <div className="custom-modal-checkout">
                            <div className='checkout-from'>
                                <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="custom-modal-row">
                                        <p className='text-primary-color'>You are about to purchase a “Abstract Painting” from ayoub_feno</p>
                                        <div className="form-group">
                                            <label className="label-name d-block">You must bid at least 15 ETH</label>
                                            <Controller
                                                name="bid"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input {...field} placeholder="00.00 ETH" className="form-control" id="bid" />
                                                )}
                                                rules={{required: true}}
                                            />
                                        </div>
                                        <div className="form-group mb-0">
                                            <label className="label-name d-block">Enter quantity <span className='text-green font-semibold'>5 available</span></label>
                                            <Controller
                                                name="quantity"
                                                control={control}
                                                render={({ field }) => (
                                                    <Input {...field} placeholder="00" className="form-control" id="quantity" />
                                                )}
                                                rules={{required: true}}
                                            />
                                        </div>
                                    </div>
                                    <Divider className='' />
                                    <div className="custom-modal-row">
                                        <div className='checkout-list mb-30'>
                                            <ul>
                                                <li>
                                                    <p>You must bid at least</p>
                                                    <span>15 ETH</span>
                                                </li>
                                                <li>
                                                    <p>Service Fee</p>
                                                    <span>0.009000 ETH</span>
                                                </li>
                                                <li>
                                                    <p>Bid Amount</p>
                                                    <span> 56,032ETH</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <button type="submit" className="btn-theme btn-theme-color font-bold w-100">Place a Bid</button>
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

export default Checkout;