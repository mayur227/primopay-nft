import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';

const AuthMaster = (props) => {
    const {ptitle} = props;
    const location = useLocation();
    useEffect(()=>{
        document.title = "Ege Money :: " +ptitle;
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }, [ptitle, location]);

    return(
        <>
            {/* <div className="auth-wrapper">
                <div className="auth-content-section"> */}
                    <Outlet/>
                {/* </div>
            </div> */}
        </>
    )
}
export default AuthMaster;