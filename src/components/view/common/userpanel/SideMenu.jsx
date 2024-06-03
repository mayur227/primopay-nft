import React, { useEffect, useState, useContext } from 'react';
import { Menu } from 'antd';
import Logo from '../../../../assets/images/logo/logo.svg';
import { Link } from 'react-router-dom';
import { AllUseContext } from '../../../layouts/masterlayout/Master';

const { SubMenu } = Menu;

const SideMenu = (props) => {
    const menukeyselect = useContext(AllUseContext);

    // Window Width Adjust Menus
    const [windowwidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    const breakpoint = 1199;
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    let svgassets = (
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.692505 10.9675V10.9412C0.726849 10.9244 0.738473 10.8893 0.755744 10.8597C1.54215 9.52284 2.32835 8.18588 3.11436 6.84878L6.949 0.325486C7.00968 0.22219 7.01014 0.222125 7.07121 0.325946L9.7252 4.84078C10.8083 6.68321 11.8913 8.52573 12.9742 10.3683C13.0858 10.5588 13.2019 10.747 13.3072 10.9412V10.9675C13.2857 10.9824 13.2648 10.9983 13.2426 11.0122C12.9236 11.2116 12.6046 11.4108 12.2855 11.6098C10.6509 12.6299 9.01631 13.65 7.38169 14.6703C7.27406 14.7375 7.1659 14.8037 7.05906 14.872C7.0255 14.8935 6.9953 14.8973 6.96279 14.8728C6.95412 14.8662 6.94414 14.8614 6.93488 14.8556L4.26874 13.1918C3.09809 12.4611 1.9274 11.7303 0.756663 10.9995C0.736306 10.9871 0.716474 10.9732 0.692505 10.9675Z" fill="#08A3B0"/>
        <path d="M0.692505 12.2417V12.2285C0.730199 12.2276 0.758174 12.2496 0.787921 12.2679C1.07743 12.4487 1.3669 12.6294 1.65632 12.8102C3.41755 13.9093 5.17853 15.0088 6.93928 16.1086C6.99123 16.1411 7.02839 16.1414 7.08067 16.1086C7.57668 15.7961 8.07373 15.4852 8.5718 15.1761C10.1233 14.2076 11.6749 13.2394 13.2266 12.2714C13.2525 12.2553 13.2771 12.2365 13.3074 12.2286V12.2549C13.293 12.2742 13.2781 12.2931 13.2643 12.3128C12.7093 13.1073 12.1543 13.9018 11.5993 14.6966C10.9854 15.5753 10.3715 16.454 9.75751 17.3327C9.03577 18.3659 8.31401 19.3989 7.59222 20.4317C7.40174 20.7043 7.21089 20.9766 7.01966 21.2486H6.99339C6.97822 21.2246 6.96384 21.2 6.94742 21.1764C6.61567 20.701 6.28378 20.2256 5.95176 19.7503C4.98306 18.364 4.01439 16.9778 3.04573 15.5915C2.28013 14.4957 1.51456 13.3999 0.749045 12.3041C0.733022 12.2812 0.71851 12.2561 0.692505 12.2417Z" fill="#08A3B0"/>
        </svg>
    )

    return(
        <>
            <div className={`page-sidebar ${menukeyselect.sidebarOpen ? 'active' : ''}`}>
                <div className="close-menu d-xl-none" onClick={menukeyselect.sidebarToggle}><i className="ri-close-line"></i></div>
                <div className="page-sidebar-logo d-xl-none">
                    <Link to='/'><img src={Logo} className="img-fluid" alt="" /></Link>
                </div>
                <div className="custom-scrollbar">
                    <Menu 
                        mode="inline"
                        triggerSubMenuAction="click"
                        selectedKeys={menukeyselect.ActiveMenuKey} 
                        defaultOpenKeys={menukeyselect.ActiveMenuKey} 
                        defaultSelectedKeys={menukeyselect.ActiveMenuKey} 
                        onClick={menukeyselect.OnMenuSelect} 
                        getPopupContainer={node => node.parentNode}
                    >
                        <SubMenu key="sidemenu1" icon={<a role="button"><i>{svgassets}</i></a>} title="Assets">
                            <Menu.Item key="subkey1"><Link to={'/usercenter/nft-assets'}>NFT Assets</Link></Menu.Item>
                            <Menu.Item key="subkey2"><Link to={'/usercenter/wallet'}>My Wallet</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sidemenu2" icon={<a role={'button'}><i className="ri-history-line"></i></a>} title="History">
                            <Menu.Item key="subkey3"><Link to={'/usercenter/history/order'}>Order</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="subkey11">
                            <Link to={'/usercenter/staking'}><i className="ri-game-fill"></i>Staking</Link>
                        </Menu.Item>
                        <Menu.Item key="subkey6">
                            <Link to={'/usercenter/favourite'}><i className="ri-heart-3-fill"></i> Favourite</Link>
                        </Menu.Item>
                        <Menu.Item key="subkey7">
                            <Link to={'/usercenter/affiliation-bonus'}><i className="ri-gift-fill"></i> Affiliation Bonus</Link>
                        </Menu.Item>
                        <SubMenu key="sidemenu3" icon={<a role={'button'}><i className="ri-settings-3-fill"></i></a>} title="Setting">
                            <Menu.Item key="subkey8"><Link to={'/usercenter/setting/basic'}>Basic</Link></Menu.Item>
                            <Menu.Item key="subkey9"><Link to={'/usercenter/setting/account-limit'}>Account Limit</Link></Menu.Item>
                            <Menu.Item key="subkey12"><Link to={'/usercenter/setting/Security'}>Security</Link></Menu.Item>
                            <Menu.Item key="subkey10"><Link to={'/usercenter/setting/notification'}>Notification</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
            {
                windowwidth > breakpoint ? '' : <div className={`sidebar-overlay${menukeyselect.sidebarOpen ? ' active' : ''}`} onClick={menukeyselect.sidebarToggle}></div>
            }
        </>
    )
}

export default SideMenu;