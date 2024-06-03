import React from "react";
import { Divider } from "antd";
import featureproduct from '../../../assets/images/product/19.jpg';
import { Link } from "react-router-dom";

const CreatorCard = (props) => {
    const {nftuserimg} = props;
    return(
        <>
            <div className='profile-user-col'>
                <div className='profile-user-circle mx-auto mb-15'>
                    <Link to={'/collection/creator-detail'}><img src={nftuserimg} className="img-fluid" alt='' /></Link>
                </div>
                <h5><Link to={'/collection/creator-detail'}>@james_195</Link></h5>
                <p>4 Sales on 14.28 ETH</p>
            </div>
        </>
    )
}

export default CreatorCard;