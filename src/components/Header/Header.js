import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import images from '../../images/ferrari.jpg';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [reviews, setReview] = useReview();
    return (
<Container className='mt-5'>
    <Row>
        <Col lg={6} md={4}>
            <div className='mt-5'>
            <h4 className='text-primary text-center'>Tesla sets another record quarter with 310,048 vehicle deliveries in Q1 2022</h4>
            <p><small>“In the first quarter, we produced over 305,000 vehicles and delivered over 310,000 vehicles, despite ongoing supply chain challenges and factory shutdowns,” Tesla said in its release. “Tesla will post its financial r esults for the first quarter of 2022 after market close on</small></p>
            </div>
            <button className='button mt-5' >See Detaild</button>
        </Col>
        <Col className='float-start h3' lg={6} md={4}>
        <h3><small>Transportation In 2030, Dual-Motor Tesla, Ferrari F60 America: What’s New @ The Car Connection</small></h3>
        <Card>
        <Card.Img src={images}   alt="Card image" />
        </Card>
        </Col>
    </Row>
  <Row>
  <h2 className='mt-3'>Customer Review...</h2>
        <Col>
            <div className='d-flex mt-3'>
                {
                reviews.slice(0, 3).map(review => <SingleReview
                key={review.id}
                review={review}
                />)
                }
            </div>
        </Col>
    </Row>
  <button className='button mt-3 mb-5 py-3'><Link to="/review">See All Review</Link></button>
  <div className='mt-5 mb-5'>
      <p>
      Review the terms of your agreement with Tesla in the use of our products, These terms ensure a consistent experience 
      </p>
  </div>
</Container>



        
    );
};

export default Header;