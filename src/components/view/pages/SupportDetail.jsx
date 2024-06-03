import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Faqs from '../common/Faqs';

const SupportDetail = (props) => {
    let params = useParams();
    let supporttitle = params.supportId.split("-").join(" ");
    const navigate = useNavigate();

    const faqsdata = [
        {
            "question":"How do I create an primopay nft account?",
            "answers":"You'll need digital currency, a crypto wallet, and an primopay nft account to start buying or selling NFTs using primopay nft."
        },
        {
            "question":"What crypto wallets can I use with primopay nft?",
            "answers":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam?"
        },
        {
            "question":"How can I transfer an NFT via primopay nft?",
            "answers":"You'll need digital currency, a crypto wallet, and an primopay nft account to start buying or selling NFTs using primopay nft."
        },
        {
            "question":"What if my wallet is not connecting?",
            "answers":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam?"
        },
        {
            "question":"How do I purchase Ethereum (ETH)?",
            "answers":"You'll need digital currency, a crypto wallet, and an primopay nft account to start buying or selling NFTs using primopay nft."
        },
        {
            "question":"What is a crypto wallet? ",
            "answers":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, unde. Ab eum voluptatum ipsam nulla, deleniti placeat vitae possimus sed a, aperiam culpa nobis qui voluptate incidunt, est modi quibusdam?"
        },
    ]

    return(
        <>
            <div className="page-wrapper pb60">
                <div className="container">
                    <div className="page-title support-faq-title text-center">
                        <h2 className='text-capitalize mb-2'>{supporttitle}</h2>
                        <p>Learn how to create an account, set up your wallet, and what you can do on primopay nft</p>
                    </div>
                    <div className="support-faq pt-lg-5">
                        <Faqs faqsdata={faqsdata}  />
                    </div>
                    <div className=''>
                        <a role={'button'} onClick={() => navigate(-1)} className="btn-theme btn-theme-primary box-shadow-primary">Back</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportDetail;