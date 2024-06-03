import React, { useEffect, useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import HeadTag from '../../../components/view/common/HeadTag';


const FullMaster = (props) => {
    const { ptitle } = props;
    
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }, [location]);

    return(
        <>
            <HeadTag pageTitle={ptitle} />
            <div className={`full-wrapper`}>
                <Outlet/>
            </div>
        </>
    )
}
export default FullMaster;