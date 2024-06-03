import React, { useState } from 'react';
import { startsWith } from 'lodash';
import { Form, Input, Select } from 'antd';
import PhoneInput from 'react-phone-input-2';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select
const Contact = () => {
    const [isDefaultCountryCode, setIsDefaultCountryCode] = useState('in');
    return(
        <>
            <div className="contact-page-wrapper pt30 pb60">
                <div className="container">
                    <div className="section-title text-center pb40 mb-0">
                        <h1 className="fw-700 mb-3">Contact Us</h1>
                        <p className="mb-0">Contact admin for any kind of supports you need</p>
                    </div>
                    <div className="contact-form">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <Form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="label-name d-block">User Name</label>
                                                <Input prefix={<i className="ri-user-line"></i>} placeholder="User Name" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="label-name d-block">Email Address</label>
                                                <Input prefix={<i className="ri-mail-line"></i>} placeholder="email address" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4 flag-form-group">
                                                <label className="label-name d-block">Phone Number</label>
                                                {/* <Input prefix={<i className="ri-smartphone-line"></i>} placeholder="+1 23 456 7890" className="form-control" /> */}
                                                <PhoneInput
                                                    country={isDefaultCountryCode}
                                                    name="phone_no"
                                                    inputclassName="input-control"
                                                    enableSearch={true}
                                                    onChange={(value, country, e, formattedValue) => {
                                                        
                                                    }}
                                                    isValid={(inputNumber, country, countries) => {
                                                        return countries.some((country) => {
                                                            return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                                                        });
                                                    }}
                                                />
                                                {/* {errors?.phone_no?.type === "required" && <span className="error-message">This field is required</span>} */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-4">
                                                <label className="label-name d-block">Reason</label>
                                                {/* <Input prefix={<i className="ri-user-line"></i>} placeholder="Select Reason for support" className="form-control" /> */}
                                                <div className="select-dropdown select-left-icon">
                                                    <i className="ri-book-open-line left-icon"></i>
                                                    <Select className="select-control" allowClear={true} showSearch={true} clearIcon={<i className="ri-close-fill"></i>} suffixIcon={<i className="ri-arrow-down-s-line"></i>} getPopupContainer={node => node.parentNode} placeholder="Select Reason for support" >
                                                        <Option value="">Reason1</Option>
                                                        <Option value="1">Reason2</Option>
                                                        <Option value="2">Reason3</Option>
                                                        <Option value="3">Reason4</Option>
                                                        <Option value="4">Reason5</Option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group mb-4">
                                                <label className="label-name d-block">Description</label>
                                                <TextArea className="form-control" rows={3} placeholder="Write your comment here" />
                                            </div>
                                            <p>By submitting this form you agree to our terms and conditions and our privacy policy which explains how we may collect, use and disclose your personal information including to third parties.</p>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button className="btn-theme btn-theme-primary box-shadow-primary w-100" style={{maxWidth:"390px"}}>Submit</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;