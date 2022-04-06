import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.css'


const Menu = () => {

    return (
        <Container>
            <Row>
                <div className='d-flex  rounded  py-3 warning'>
                <Col lg={6}>
                    <button className='menu-icon'>
                    <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>

                    </button>
                </Col>
                <Col lg={6}>
                    <div className='menu-style '>   
                        <Link to="/header">Home</Link>
                        <Link to="/review">Review</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/product">Blog</Link>
                        <Link to="/about">About</Link>
                    </div>
                </Col>
                </div>
            </Row>
        </Container>

        );
};

export default Menu;