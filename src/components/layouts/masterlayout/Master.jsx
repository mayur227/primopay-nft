import React, { useEffect, useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import HeadTag from '../../../components/view/common/HeadTag';
import PageLoader from '../../../components/view/common/PageLoader';
import AppMobileMenu from '../../view/common/AppMobileMenu';

const AllUseContext = createContext();

const Master = (props) => {
    const { ptitle, ActiveMenuKey } = props;
    const [loading, setLoading] = useState(true);
    
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }, [location]);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500);

    }, []);

    const breakpoint = 991;
    const [windowwidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        handleWindowResize();
        window.addEventListener("resize", handleWindowResize);
        window.addEventListener("load", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const [selectedKeys, setselectedKeys] = useState(ActiveMenuKey);
    
    const rootSubmenuKeys = ['sidemenu1', 'sidemenu2', 'sidemenu3'];

    const OnMenuSelect = ({ key, keyPath }) => {
        const latestSelectedKey = keyPath.find(e => selectedKeys.indexOf(e) !== key);
        if (rootSubmenuKeys.indexOf(latestSelectedKey) === -1) {
            setselectedKeys(keyPath);
        } else {
            setselectedKeys(latestSelectedKey ? [latestSelectedKey] : []);
        }   
    }

    useEffect(() => {
        // localStorage.setItem("SelectedMenus", JSON.stringify(SelectedKeys));
        localStorage.setItem("OpenMenus", JSON.stringify(selectedKeys));
        setselectedKeys(ActiveMenuKey);
    }, [ActiveMenuKey]);


    const [sidebarOpen, SetSidebarOpen] = useState(false);
    const sidebarToggle = () => {
        sidebarOpen ? SetSidebarOpen(false) : SetSidebarOpen(true)
    }

    return(
        <>
            <PageLoader loading={loading} />
            <HeadTag pageTitle={ptitle} />
            <div className={`main-wrapper ${windowwidth > breakpoint ? "" : "app-wrapper"} ${location.pathname === '/' ? 'home-main-page':''}`}>
                <Header ActiveMenuKey={ActiveMenuKey} OnMenuSelect={OnMenuSelect} selectedKeys={selectedKeys} sidebarToggle={sidebarToggle} />

                <div className="main-content-sections">
                    <AllUseContext.Provider value={{ActiveMenuKey, OnMenuSelect, sidebarOpen, sidebarToggle}}>
                        <Outlet/>
                    </AllUseContext.Provider>
                </div>

                <Footer/>

                {windowwidth > breakpoint ? '' : <AppMobileMenu ActiveMenuKey={ActiveMenuKey} OnMenuSelect={OnMenuSelect} selectedKeys={selectedKeys} />}
                
            </div>
        </>
    )
}
export default Master;
export {AllUseContext};