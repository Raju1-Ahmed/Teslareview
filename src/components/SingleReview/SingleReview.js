import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name, img, seller, ratings} = props.review;
    return (
        <div className='image mt-5'>
            <div className='  rounded py-3 px-3 bacground'>
            <button className='border'><img src={img}/></button>
            <h3>Name: {name}</h3>
            <p> <small>Review: {seller}</small> </p>
            <p>Rating: {ratings}</p>
            </div>
        </div>
    );
};

export default SingleReview;