import React from 'react';

const Card = (props) => {
    const {name,thumbnailUrl,phone, email,company,} = props.review;
    return (
        <div>
            <h1>{name}</h1>
            <h1>{phone}</h1>
            <button><img src={thumbnailUrl} /></button>

        </div>
    );
};

export default Card;