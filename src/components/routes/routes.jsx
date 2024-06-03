import ErrorPage from "../view/ErrorPage";
import Sitemap from "../view/Sitemap";

import Home from "../view/pages/Home";
import Marketplace from "../view/pages/Marketplace";
import MintNFT from "../view/pages/MintNFT";
// import ComingSoon from "../view/ComingSoon";
import NFTDetail from "../view/pages/NFTDetail";
import MintYourNFT from "../view/pages/MintYourNFT";
import CreateNFT from "../view/pages/CreateNFT";
import Assets from "../view/pages/Assets";

import NFTAssets from "../view/pages/usercenter/NFTAssets";
import Wallet from "../view/pages/usercenter/Wallet";
import Order from "../view/pages/usercenter/history/Order";
import Favourite from "../view/pages/usercenter/Favourite";
import AffiliationBonus from "../view/pages/usercenter/AffiliationBonus";
import AnnualizedIncome from "../view/pages/usercenter/AnnualizedIncome";
import Basic from "../view/pages/usercenter/setting/Basic";
import AccountLimit from "../view/pages/usercenter/setting/AccountLimit";
import Notification from "../view/pages/usercenter/setting/Notification";
import Art from "../view/pages/collection/Art";
import CreatorDetail from "../view/pages/collection/CreatorDetail";
import Staking from "../view/pages/usercenter/Staking";
import StakingEarnReport from "../view/pages/usercenter/StakingEarnReport";
import Support from "../view/pages/Support";
import SupportDetail from "../view/pages/SupportDetail";
import PrivacyPolicy from "../view/pages/PrivacyPolicy";
import TermsConditions from "../view/pages/TermsConditions";
import Security from "../view/pages/usercenter/setting/Security";
import GoogleVerify from "../view/pages/usercenter/setting/GoogleVerify";
import PhoneChangeVerification from "../view/pages/usercenter/setting/PhoneChangeVerification";
import EmailChangeVerification from "../view/pages/usercenter/setting/EmailChangeVerification";

const routes = [
    {
        path    :   "/",
        exact   :   true,
        auth    :   true,
        verify  :   true,
        ActiveMenuKey: ['key1'],
        component   : <Home title="Home"/>
    },
    // {
    //     path    :   "/marketplace",
    //     exact   :   true,
    //     auth    :   true,
    //     verify  :   true,
    //     ActiveMenuKey: ['key2'],
    //     component   : <Marketplace title="Marketplace"/>
    // },
    {
        path    :   "/nft-detail",
        exact   :   true,
        auth    :   true,
        verify  :   true,
        ActiveMenuKey: ['key12'],
        component   : <NFTDetail title="NFT Detail"/>
    },
    {
        path    :   "/mint-nft",
        exact   :   true,
        auth    :   true,
        verify  :   true,
        ActiveMenuKey: ['key3'],
        component   : <MintNFT title="Mint NFT"/>
    },
    {
        path    :   "/mint-your-nft",
        exact   :   true,
        auth    :   true,
        verify  :   true,
        ActiveMenuKey: [],
        component   : <MintYourNFT title="Mint Your NFT"/>
    },
    {
        path    :   "/create-nft",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: [],
        component   : <CreateNFT title="Create NFT"/>
    },
    {
        path    :   "/marketplace",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['key8', 'submenu1'],
        component   : <Marketplace title="All NFTs"/>
    },
    {
        path    :   "/collection/art",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['key9', 'submenu1'],
        component   : <Art title="Explore Art"/>
    },
    {
        path    :   "/collection/creator-detail",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: [],
        component   : <CreatorDetail title="Collection"/>
    },
    {
        path    :   "/support",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['key5'],
        component   : <Support title="Support"/>
    },
    {
        path    :   "/support/:supportId",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['key5'],
        component   : <SupportDetail title="Support Detail"/>
    },
    {
        path    :   "/privacy-policy",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: [],
        component   : <PrivacyPolicy title="Privacy Policy"/>
    },
    {
        path    :   "/terms-conditions",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: [],
        component   : <TermsConditions title="Terms & Conditions"/>
    },
    {
        path    :   "/usercenter/nft-assets",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey1', 'sidemenu1'],
        component   : <NFTAssets title="NFT Assets"/>
    },
    {
        path    :   "/usercenter/wallet",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey2', 'sidemenu1'],
        component   : <Wallet title="My Wallet"/>
    },
    {
        path    :   "/usercenter/history/order",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey3', 'sidemenu2'],
        component   : <Order title="History - Order"/>
    },

    {
        path    :   "/usercenter/staking",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey11'],
        component   : <Staking title="Staking"/>
    },
    {
        path    :   "/usercenter/staking-earn-report",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey11'],
        component   : <StakingEarnReport title="Staking Earn Report"/>
    },
    {
        path    :   "/usercenter/favourite",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey6'],
        component   : <Favourite title="Favourite"/>
    },
    {
        path    :   "/usercenter/affiliation-bonus",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey7'],
        component   : <AffiliationBonus title="Affiliation Bonus"/>
    },
    {
        path    :   "/usercenter/annualized-income",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey7'],
        component   : <AnnualizedIncome title="Annualized Income"/>
    },

    {
        path    :   "/usercenter/setting/basic",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey8', 'sidemenu3'],
        component   : <Basic title="Settings - Basic"/>
    },
    {
        path    :   "/usercenter/setting/account-limit",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey9', 'sidemenu3'],
        component   : <AccountLimit title="Settings - Account Limit"/>
    },
    {
        path    :   "/usercenter/setting/security",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey12', 'sidemenu3'],
        component   : <Security title="Settings - Security"/>
    },
    {
        path    :   "/usercenter/setting/google-verify",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey12', 'sidemenu3'],
        component   : <GoogleVerify title="Settings - Google Verify"/>
    },
    {
        path     : '/usercenter/setting/email-change',
        exact    : true,
        auth     : true,
        verify   : false,
        ActiveMenuKey: ['subkey12', 'sidemenu3'],
        component : <EmailChangeVerification title="Settings - Email Change Verification"/>
    },
    {
        path     : '/usercenter/setting/phone-change',
        exact    : true,
        auth     : true,
        verify   : false,
        ActiveMenuKey: ['subkey12', 'sidemenu3'],
        component : <PhoneChangeVerification title="Settings - Phone Change Verification"/>
    },
    {
        path    :   "/usercenter/setting/notification",
        exact   :   true,
        auth    :   true,
        verify  :   false,
        ActiveMenuKey: ['subkey10', 'sidemenu3'],
        component   : <Notification title="Settings - Notification"/>
    },

    // {
    //     path    :   "/comingsoon",
    //     exact   :   true,
    //     auth    :   false,
    //     verify  :   false,
    //     ActiveMenuKey: [],
    //     component   : <ComingSoon title="ComingSoon"/>
    // },
    // {
    //     path    :   "*",
    //     exact   :   true,
    //     auth    :   false,
    //     verify  :   false,
    //     ActiveMenuKey: [],
    //     component   : <ErrorPage title="Error 404"/>
    // },
    {
        path    :   "/sitemap",
        exact   :   true,
        auth    :   true,
        verify  :   true,
        ActiveMenuKey: [],
        component   : <Sitemap title="Sitemap"/>
    }
]

export default routes;