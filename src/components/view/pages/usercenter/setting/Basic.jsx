import React from 'react';
import { Divider, Input } from 'antd';
import { useForm, Controller } from "react-hook-form";
import SideMenu from '../../../common/userpanel/SideMenu';
import Avatar from '../../../../../assets/images/avatar.png';
import TextArea from 'antd/lib/input/TextArea';

const Basic = (props) => {
    const { register, formState: { errors }, handleSubmit, control } = useForm();

    const onSubmit = (e) => {
        e.preventdefault();
    }

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
                            <div className='sidebar-content-view h-100 pb-5'>
                                <div className="user-profile-info">
                                    <div className="up-info-left d-md-flex align-items-center">
                                        <div className="user-profile-img">
                                            <img src={Avatar} className="img-fluid" alt="" />
                                            <input type="file" id="profile-img" />
                                            <a role="button" className="edit-avter">
                                                <i className="ri-camera-fill"></i>
                                            </a>
                                        </div>
                                        <div className="up-info-name">
                                            <h2>Theresa Web</h2>
                                            <p>User ID: 70138521</p>
                                        </div>
                                    </div>
                                </div>
                                <Divider className='mt-4' />
                                <div className='basic-setting-from'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="label-name d-block--for">Full Name</label>
                                                    <Controller
                                                        name="full-name"
                                                        id="full-name"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Input {...field} placeholder="Full Name" className="form-control" id="full-name" />
                                                        )}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="label-name d-block--for">Email</label>
                                                    <Controller
                                                        name="email"
                                                        id="email"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Input {...field} placeholder="info@example.com" className="form-control" id="email" />
                                                        )}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="label-name d-block--for">UID</label>
                                                    <Controller
                                                        name="utd"
                                                        id="utd"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <Input {...field} placeholder="UID" className="form-control" id="utd" />
                                                        )}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className="form-group">
                                                    <label className="label-name d-block--for">Bio</label>
                                                    <Controller
                                                        name="bio"
                                                        id="bio"
                                                        control={control}
                                                        render={({ field }) => (
                                                            <TextArea {...field} placeholder="Bio" className="form-control" id="bio" />
                                                        )}
                                                        rules={{
                                                            required: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className='col-12'>
                                                <div className='text-center mt-4'>
                                                    <button type="submit" className="btn-theme btn-theme-primary font-bold min-w150">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Basic;
