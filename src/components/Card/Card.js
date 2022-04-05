import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
        const {name,img, ratings, seller} = props.review;
    return (
        <div className='image'>
            <div className=' mt-3  py-3 px-3 bacground'>
            <button className='border'><img src={img}/></button>
            <h3>{name}</h3>
            <p> <small>{seller}</small> </p>
            <p>{ratings}</p>
        </div>
        </div>
    );
};

export default Card;