import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Lottie from 'react-lottie';
import animationData from '../../assets/images/loader/errorpage.json';
import Logo from '../../assets/images/logo/logo.svg';

const ErrorPage = () => {

    const navigate = useNavigate();

    const loaderoptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return(
        <>
            <div className="errorpage-container w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="page-not-found-box text-center py-lg-5 py-4">
                                <div className="errorpage-logo">
                                    <Link to='/'><img src={Logo} className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="errorpage-loader">
                                    <Lottie speed={1.5} options={loaderoptions} />
                                </div>
                                <p>The page you are looking for can not be found</p>
                                <a role={'button'} onClick={() => navigate(-1)} className="btn-theme btn-theme-primary box-shadow-primary">Go to Back</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ErrorPage;