import React, { useState, useEffect } from 'react';
import { Menu, Input, Drawer, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/logo/logo.svg';
import Avatar from '../../../assets/images/avatar.png';
import metamask from '../../../assets/images/metamask.svg';
import usflag from '../../../assets/images/flag/us.png';
import japanflag from '../../../assets/images/flag/japan.png';

const { SubMenu } = Menu;
const { Search } = Input;

const Header = (props) => {
    const {selectedKeys, OnMenuSelect} = props;

    const [searchvisible, setSearchVisible] = useState(false);
    const [rightbarvisible, setRightbarVisible] = useState(false);

    // Sticky-header
    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('sticky-header');
            }
        });
    }, [])

    // Window Width Adjust Menus
    const [windowwidth, setWindowWidth] = useState(window.innerWidth);
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    const breakpoint = 991;
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Toggle Sidebar
    const [IsMenuOpen, SetIsMenuOpen] = useState(false);
    const ToggleSidebar = () => {
        IsMenuOpen ? SetIsMenuOpen(false) : SetIsMenuOpen(true)
    }

    const showSearchDrawer = () => {
        setSearchVisible(true);
    };
    const onCloseSearchDrawer = () => {
        setSearchVisible(false);
    };
    const showSidebarDrawer = () => {
        // setRightbarVisible(true);
        rightbarvisible ? setRightbarVisible(false) : setRightbarVisible(true)
    };
    const rightbarClose = () => {
        setRightbarVisible(false);
    };


    const [walletvisible, setWalletVisible] = useState(false);
    const showWalletDrawer = () => {
        setWalletVisible(true);
    };
    const walletDrawerClose = () => {
        setWalletVisible(false);
    };

    let svgassets = (
        <svg width="14" height="22" viewBox="0 0 14 22" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.692505 10.9675V10.9412C0.726849 10.9244 0.738473 10.8893 0.755744 10.8597C1.54215 9.52284 2.32835 8.18588 3.11436 6.84878L6.949 0.325486C7.00968 0.22219 7.01014 0.222125 7.07121 0.325946L9.7252 4.84078C10.8083 6.68321 11.8913 8.52573 12.9742 10.3683C13.0858 10.5588 13.2019 10.747 13.3072 10.9412V10.9675C13.2857 10.9824 13.2648 10.9983 13.2426 11.0122C12.9236 11.2116 12.6046 11.4108 12.2855 11.6098C10.6509 12.6299 9.01631 13.65 7.38169 14.6703C7.27406 14.7375 7.1659 14.8037 7.05906 14.872C7.0255 14.8935 6.9953 14.8973 6.96279 14.8728C6.95412 14.8662 6.94414 14.8614 6.93488 14.8556L4.26874 13.1918C3.09809 12.4611 1.9274 11.7303 0.756663 10.9995C0.736306 10.9871 0.716474 10.9732 0.692505 10.9675Z"/>
        <path d="M0.692505 12.2417V12.2285C0.730199 12.2276 0.758174 12.2496 0.787921 12.2679C1.07743 12.4487 1.3669 12.6294 1.65632 12.8102C3.41755 13.9093 5.17853 15.0088 6.93928 16.1086C6.99123 16.1411 7.02839 16.1414 7.08067 16.1086C7.57668 15.7961 8.07373 15.4852 8.5718 15.1761C10.1233 14.2076 11.6749 13.2394 13.2266 12.2714C13.2525 12.2553 13.2771 12.2365 13.3074 12.2286V12.2549C13.293 12.2742 13.2781 12.2931 13.2643 12.3128C12.7093 13.1073 12.1543 13.9018 11.5993 14.6966C10.9854 15.5753 10.3715 16.454 9.75751 17.3327C9.03577 18.3659 8.31401 19.3989 7.59222 20.4317C7.40174 20.7043 7.21089 20.9766 7.01966 21.2486H6.99339C6.97822 21.2246 6.96384 21.2 6.94742 21.1764C6.61567 20.701 6.28378 20.2256 5.95176 19.7503C4.98306 18.364 4.01439 16.9778 3.04573 15.5915C2.28013 14.4957 1.51456 13.3999 0.749045 12.3041C0.733022 12.2812 0.71851 12.2561 0.692505 12.2417Z"/>
        </svg>
    );

    return(
        <>
            <header className={`header-wrapper ${scrolltopdata}`}>
                <div className="header-main">
                    <div className="container-fluid">
                        <div className="header-part px-lg-4">
                            <div className="logo-part">
                                <Link to='/'><img src={Logo} className="img-fluid" alt="" /></Link>
                            </div>
                            <div className="header-search d-none d-xl-block">
                                <form>
                                    <div className="header-search-input">
                                        <Input placeholder="Search items, collections, and accounts" className='form-control'/>
                                        <button><i className="ri-search-line"></i></button>
                                    </div>
                                </form>
                            </div>
                            {
                                windowwidth > breakpoint ? 
                                <div className={`menu-part custom-scrollbar${IsMenuOpen ? ' active' : ''}`}>
                                    <div className='h-menu-inner'>
                                        {/* <div className="close-menu d-lg-none" onClick={ToggleSidebar}>
                                            <i className="ri-close-fill"></i>
                                        </div> */}
                                        <div className="menu-data header-menu-data">
                                            <Menu 
                                                defaultSelectedKeys={['key1']} 
                                                mode={windowwidth > breakpoint ? 'horizontal' : 'inline'}
                                                onClick={OnMenuSelect}
                                                selectedKeys={selectedKeys}
                                                triggerSubMenuAction="click"
                                                getPopupContainer={node => node.parentNode}
                                            >
                                                <Menu.Item key="key1" className="menu-item">
                                                    <Link to='/'>Home</Link>
                                                </Menu.Item>
                                                {/* <Menu.Item key="key2" className="menu-item">
                                                    <Link to={'/marketplace'}>Marketplace</Link>
                                                </Menu.Item> */}
                                                <SubMenu key="submenu1" className="menu-item" title="MarketPlace">
                                                    <Menu.Item key="key8"><Link to={'/marketplace'}>All NFTs</Link></Menu.Item>
                                                    <Menu.Item key="key9"><Link to={'/collection/art'}>Art</Link></Menu.Item>
                                                    <Menu.Item key="key10"><Link to={'/collection/art'}>Collectibles</Link></Menu.Item>
                                                    <Menu.Item key="key11"><Link to={'/collection/art'}>Music</Link></Menu.Item>
                                                    <Menu.Item key="key12"><Link to={'/collection/art'}>Photography</Link></Menu.Item>
                                                    <Menu.Item key="key13"><Link to={'/collection/art'}>Sports</Link></Menu.Item>
                                                    <Menu.Item key="key14"><Link to={'/collection/art'}>Trading Cards</Link></Menu.Item>
                                                    <Menu.Item key="key15"><Link to={'/collection/art'}>Utility</Link></Menu.Item>
                                                    <Menu.Item key="key16"><Link to={'/collection/art'}>Virtual Worlds</Link></Menu.Item>
                                                </SubMenu>
                                                <Menu.Item key="key3" className="menu-item">
                                                    <Link to={'/mint-nft'}>Mint NFT</Link>
                                                </Menu.Item>
                                                {/* <Menu.Item key="subkey2" className="menu-item">
                                                    <Link to={'/usercenter/wallet'}>Wallet</Link>
                                                </Menu.Item> */}
                                                <Menu.Item key="key5" className="menu-item">
                                                    <Link to={'/support'}>Support</Link>
                                                </Menu.Item>
                                            </Menu>
                                        </div>
                                    </div>
                                </div> 
                                : 
                                ""
                            }

                            <div className="account-part ms-auto">
                                <div className="menu-data d-flex align-items-center">
                                    <div className="lang-dropdown ms-3">
                                        <Dropdown overlay={
                                            <Menu className="more-dropdown-menu custom-scrollbar">
                                                <Menu.Item key="language:1"><a role="button"><i className="lang-flag"><img src={usflag} className="img-fluid" alt="English" /></i>English</a></Menu.Item>
                                                <Menu.Item key="language:2"><a role="button"><i className="lang-flag"><img src={japanflag} className="img-fluid" alt="Japanese" /></i>Japanese</a></Menu.Item>
                                            </Menu>
                                        } trigger={['click']} placement="bottomRight" getPopupContainer={node => node.parentNode}>
                                            <a role={'button'} className="ant-dropdown-link"><i className="lang-flag me-sm-2 me-0"><img src={usflag} className="img-fluid" alt="Eng" /></i><span>Eng</span></a>
                                        </Dropdown>
                                    </div>
                                    <div className="search-icon-btn d-xl-none" onClick={showSearchDrawer}><i className="ri-search-line align-bottom"></i></div>
                                    <div className="header-profile-nav">
                                        {
                                            windowwidth > 1199 ? 
                                                <Menu mode="horizontal" triggerSubMenuAction="click" selectedKeys={selectedKeys} defaultOpenKeys={selectedKeys} defaultSelectedKeys={selectedKeys} onClick={OnMenuSelect} disabledOverflow={true} getPopupContainer={node => node.parentNode}>
                                                    <SubMenu key="userprofile" title={
                                                        <div className="profile-media d-flex align-items-center">
                                                            <span className="notifi-icon"><img src={Avatar} alt='' /></span>
                                                        </div>
                                                        } className="menu-item user-profile-icon" popupClassName="profile-dropdown">
                                                        <Menu.ItemGroup>
                                                            <Menu.Item key="subkey1"><Link to={'/usercenter/nft-assets'}><i>{svgassets}</i><span>NFT Assets</span></Link></Menu.Item>
                                                            <Menu.Item key="subkey3"><Link to={'/usercenter/history/order'}><i className="ri-history-line"></i><span>History</span></Link></Menu.Item>
                                                            <Menu.Item key="subkey9"><Link to={'/usercenter/setting/account-limit'}><i className="ri-bar-chart-box-fill"></i><span>Account Limit</span></Link></Menu.Item>
                                                            <Menu.Item key="subkey6"><Link to={'/usercenter/favourite'}><i className="ri-heart-3-fill"></i><span>Favorites</span></Link></Menu.Item>
                                                            <Menu.Item key="subkey7"><Link to={'/usercenter/affiliation-bonus'}><i className="ri-gift-fill"></i><span>Affiliation Bonus</span></Link></Menu.Item>
                                                            <Menu.Item key="subkey10"><Link to={'usercenter/setting/notification'}><i className="ri-notification-3-fill"></i><span>Notification</span></Link></Menu.Item>
                                                        </Menu.ItemGroup>
                                                    </SubMenu>
                                                </Menu>
                                            : 
                                            <div className="profile-media d-flex align-items-center">
                                                <span className="notifi-icon"><img src={Avatar} alt='' /></span>
                                            </div>
                                        }
                                    </div>
                                    {
                                        windowwidth > breakpoint ? 
                                        <div className="wallet-drawer-btn">
                                            <a role={'button'} className="d-flex" onClick={showWalletDrawer}>
                                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.1712 15.6277H18.2845C16.8693 15.6277 15.7217 14.4801 15.7217 13.0639C15.7217 11.6486 16.8693 10.501 18.2845 10.501H22.1407" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M18.7221 13.0053H18.4249" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M8.6062 9.09587H12.6662" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.71411 13.2053C3.71411 6.80053 6.03887 4.66624 13.0151 4.66624C19.9903 4.66624 22.3151 6.80053 22.3151 13.2053C22.3151 19.6091 19.9903 21.7443 13.0151 21.7443C6.03887 21.7443 3.71411 19.6091 3.71411 13.2053Z" stroke="#aaaaaa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div> 
                                        :
                                        ''
                                    }
                                    {
                                        windowwidth > 1199 ? 
                                        ''
                                        :
                                        <div className="mobile-toggle-btn" onClick={showSidebarDrawer}>
                                            <a role={'button'} className={`mobileNav-wrapper ${rightbarvisible ? "active" : ""}`}>
                                                <span className="mobileNav-toggle"></span>
                                            </a>
                                        </div>
                                    }
                                </div>
                            </div>
                            {
                                windowwidth > breakpoint ? '' : <div className={`menu-overlay-bgs ${IsMenuOpen ? 'active' : ''}`} onClick={ToggleSidebar}></div>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <Drawer 
                title=""
                placement="right"
                width='100%'
                visible={searchvisible}
                footer=""
                closable={false}
                className="header-search-drawer"
            >
                <form>
                    <div className="header-search-input d-flex align-items-center ms-0 w-100">
                        <Input placeholder="Search" className='form-control w-100'/>
                        <button><i className="ri-search-line"></i></button>
                        <a role={'button'} className="ms-3 me-2" onClick={onCloseSearchDrawer}>cancel</a>
                    </div>
                </form>
            </Drawer>
            {
                windowwidth > 1199 ? '' : 
                <Drawer 
                    title=""
                    placement="right"
                    visible={rightbarvisible}
                    footer=""
                    closable={false}
                    onClose={rightbarClose}
                    className="header-sidebar-drawer"
                >
                    <Menu 
                        className='menuheader-sidebar'
                        mode="inline" 
                        triggerSubMenuAction="click" 
                        selectedKeys={selectedKeys} 
                        defaultOpenKeys={selectedKeys} 
                        defaultSelectedKeys={selectedKeys} 
                        onClick={OnMenuSelect} 
                        disabledOverflow={true} 
                        getPopupContainer={node => node.parentNode}
                    >
                        <SubMenu key="sidemenu1" className="menu-item" icon={<a role="button"><i className='h-drawer-icon'>{svgassets}</i></a>} title="Assets">
                            <Menu.Item key="subkey1"><Link to={'/usercenter/nft-assets'}>NFT Assets</Link></Menu.Item>
                            <Menu.Item key="subkey2"><Link to={'/usercenter/wallet'}>My Wallet</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu key="sidemenu2" className="menu-item" icon={<a role={'button'}><i className="ri-history-line h-drawer-icon"></i></a>} title="History">
                            <Menu.Item key="subkey3"><Link to={'/usercenter/history/order'}>Order</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="subkey11">
                            <Link to={'/usercenter/staking'}><i className="ri-game-fill h-drawer-icon"></i>Staking</Link>
                        </Menu.Item>
                        <Menu.Item key="subkey6" className="menu-item">
                            <Link to={'/usercenter/favourite'}><i className="ri-heart-3-fill h-drawer-icon"></i>Favourite</Link>
                        </Menu.Item>
                        <Menu.Item key="subkey7" className="menu-item">
                            <Link to={'/usercenter/affiliation-bonus'}><i className="ri-gift-fill h-drawer-icon"></i>Affiliation Bonus</Link>
                        </Menu.Item>
                        <SubMenu key="sidemenu3" className="menu-item" icon={<a role={'button'}><i className="ri-settings-3-fill h-drawer-icon"></i></a>} title="Setting">
                            <Menu.Item key="subkey8"><Link to={'/usercenter/setting/basic'}>Basic</Link></Menu.Item>
                            <Menu.Item key="subkey9"><Link to={'/usercenter/setting/account-limit'}>Account Limit</Link></Menu.Item>
                            <Menu.Item key="subkey12"><Link to={'/usercenter/setting/Security'}>Security</Link></Menu.Item>
                            <Menu.Item key="subkey10"><Link to={'/usercenter/setting/notification'}>Notification</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="key5" className="menu-item">
                            <Link to={'/support'}><i className="ri-customer-service-2-fill h-drawer-icon"></i>Support</Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>
            }

            <Drawer 
                title=""
                placement="right"
                visible={walletvisible}
                footer=""
                closable={false}
                onClose={walletDrawerClose}
                className="wallet-sidebar-drawer"
            >
                <div className="wallet-drawer-content">
                    <div className='border-bottom d-flex align-items-center justify-content-between pe-4'>
                        <div className="wallet-media d-flex align-items-center">
                            <span className="profile-icon"><img src={Avatar} alt='' /></span>
                            <div className='wallet-user-info ms-3'><h4>My Wallet</h4></div>
                        </div>
                        <a role={'buttom'} className="wallet-drawer-close fs-20 text-gray" onClick={walletDrawerClose}>
                            <i className="ri-close-line"></i>
                        </a>
                    </div>
                    
                    <div className="wallet-drawer-row">
                        <p>Connect with one of our available <span className='text-theme-color font-semibold'>wallet</span> providers or create a new one.</p>
                        <a role={'buttom'} className="wallet-drawer-col text-center mt-30">
                            <div className="wallet-drawer-icon mb-4">
                                <img src={metamask} className="img-fluid" alt='' />
                            </div>
                            <h5>MetaMask</h5>
                        </a>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Header;