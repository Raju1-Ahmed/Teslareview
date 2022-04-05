import React from 'react';
import './Card.css'

const Card = (props) => {
        const {name,img, ratings, seller} = props.review;
    return (
        <div className='image'>
            <div className=' mt-3  py-3 px-3 bacground'>
            <button className='border'><img src={img}/></button>
            <h3>Name: {name}</h3>
            <p> <small>Review: {seller}</small> </p>
            <p>Rating: {ratings}</p>
        </div>
        </div>
    );
};

export default Card;