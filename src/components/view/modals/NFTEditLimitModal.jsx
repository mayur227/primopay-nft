import React from 'react';
import { Modal, Input } from 'antd';
import DataLoader from '../common/DataLoader';

const NFTEditLimitModal = (props) => {
    const { NFTLimitModalOpen, NFTLimitModalCloseEvent } = props;

    return (
        <>
            <Modal visible={NFTLimitModalOpen} centered footer={''} closable={false} onCancel={NFTLimitModalCloseEvent} getPopupContainer={node => node.parentNode} className="cm-style-2">
                <div className="custom-modal">
                    <div className="custom-modal-header">
                        <h6 className="custom-modal-title">Edit Daily Limit</h6>
                        <button className="custom-modal-close" onClick={NFTLimitModalCloseEvent}><i className="ri-close-fill"></i></button>
                    </div>
                    <div className="custom-modal-body data-loader">
                        <DataLoader />
                        <div className="fiat-account-info px-4 pt-20 pb-20">
                            <div className="fiat-lst-box">
                                <div className="form-group">
                                    <label className="label-name">Enter New Limit</label>
                                    <div className="input-form-group">
                                        <Input className="form-control" suffix="$ USD" />
                                    </div>
                                    <div className="form-text"><span className="ms-1">≈ 51,140,348.75 USDT</span></div>
                                </div>
                                <div className="d-flex mt-2">
                                    <button className="btn-theme btn-theme-gray font-bold me-1 w-50" onClick={NFTLimitModalCloseEvent}>Cancel</button>
                                    <button className="btn-theme btn-theme-primary font-bold ms-1 w-50">Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NFTEditLimitModal;