import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'


const Menu = () => {

    return (
        <div className='menu-style mt-3'>
        <Link to="/header">Home</Link>
        <Link to="/review">Review</Link>
        <Link to="/product">Product</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        </div>
        );
};

export default Menu;