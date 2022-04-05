import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import images from '../../images/0x0-Model.jpg';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import { Link } from 'react-router-dom';

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
        </Col>
        <Col className='float-start' lg={6} md={4}>
        <h3><small>This is Tesla latest version car</small></h3>
        <Card>
        <Card.Img src={images}   alt="Card image" />
        </Card>
        </Col>
    </Row>
  <div className='mt-5'>
  <Row>
        <Col>
        {
        reviews.slice(0, 3).map(review => <SingleReview
            key={review.id}
            review={review}
            />)
        }
     
        </Col>
    </Row>
  </div>
  <button className='mt-5 py-3'><Link to="/review">See All Review</Link></button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
</Container>

        
    );
};

export default Header;