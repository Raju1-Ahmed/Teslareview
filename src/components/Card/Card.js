import { Button } from 'bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
        const {name,img,ratings, email,company,} = props.review;
    return (
        <div className='image'>
            <div className='d-flex mt-3  py-3 px-3 bacground'>
            <button className='border'><img src={img}/></button>
            <h3>{name}</h3>
        </div>
        </div>
    );
};

export default Card;