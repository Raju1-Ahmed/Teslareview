import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Menu = () => {

    return (
        <div>
    <Nav>
        <Link to="/header">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/product">Product</Link>
        <Link to="/about">About</Link>
    </Nav>

        </div>
        );
};

export default Menu;