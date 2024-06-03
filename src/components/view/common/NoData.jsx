import React from 'react';

const NoData = (props) => {
    const {msgcontent, image} = props;
    return (
        <>
            <div className="no-data">
                <img src={image} alt="" />
                <p>{msgcontent}</p>
            </div>
        </>
    )
}

export default NoData;



