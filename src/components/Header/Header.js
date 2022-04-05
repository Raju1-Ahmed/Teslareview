import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../images/0x0-Model.jpg';
// import useReview from '../../hooks/useReview';
// import Review from '../Review/Review';

const Header = () => {
    // const [reviews, setReview] = useReview();
    return (
<Container className='mt-5'>
    <Row>
        <Col xs={6} md={4}>
            <h4 className='text-primary text-center'>Tesla sets another record quarter with 310,048 vehicle deliveries in Q1 2022</h4>

            <p><small>“In the first quarter, we produced over 305,000 vehicles and delivered over 310,000 vehicles, despite ongoing supply chain challenges and factory shutdowns,” Tesla said in its release. “Tesla will post its financial r esults for the first quarter of 2022 after market close on</small></p>
        </Col>
        <Col></Col>
        <Col className='float-start' xs={6} md={4}>this is header of right
        <Card>
        <Card.Img src={images}   alt="Card image" />
        </Card>
        </Col>
    </Row>
    <Row>
        <Col>
            
            <div className='w-50 mt-5 bg-danger py-5 px-3 around'>

        {/* {
            reviews.map(review => <Review
            key={review.id}
            review={review}
            />)
        
        } */}

               <h2>This is Review of header: {}</h2>
            <button>
            <Nav> <Link to="/review">See All Review</Link></Nav>
            </button>
            </div>
        </Col>
    </Row>
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