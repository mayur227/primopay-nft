import React from "react";

const Faqs = (props) => {
    const {faqsdata} = props;
    return(
        <>
            {faqsdata.map((data, index)=>{
                return(
                    <div className="faqs-row" key={index}>
                        <h6>{data.question}</h6>
                        <p>{data.answers}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Faqs;