import { faRankingStar, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name, img, seller, ratings} = props.review;
    return (
            <div className='bacground rounded py-3'>
            <button className='image-style'><img src={img}/></button>
            <h3>{name}</h3>
            <p> <small>{seller}</small> </p>
            <Button> <FontAwesomeIcon icon={faRankingStar}></FontAwesomeIcon> </Button>
            <p>Rating: {ratings}</p>
            </div>
    );
};

export default SingleReview;