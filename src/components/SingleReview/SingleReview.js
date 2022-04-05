import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name, img} = props.review;
    return (
        <div className='image mt-5'>
            <div className='d-flex  rounded py-3 px-3 bacground'>
            <button className='border'><img src={img}/></button>
            <h3>{name}</h3>
            </div>
        </div>
    );
};

export default SingleReview;