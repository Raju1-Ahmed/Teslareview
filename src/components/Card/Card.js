import React from 'react';
import './Card.css'
import { faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
        const {name,img, ratings, seller} = props.review;
    return (
        <div className='image'>
            <div className=' mt-3  py-3 px-3 bacground'>
            <button className='profile-img'><img src={img}/></button>
            <h3>{name}</h3>
            <p> <small>{seller}</small> </p>
            <button className='d-flex rating-icon'>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <p>(Rating: {ratings}.3)</p>
            </button>
        </div>
        </div>
    );
};

export default Card;