import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Header = () => {
    return (
<Container className='mt-5'>
    <Row>
        <Col xs={6} md={4}>
            <h4 className='text-primary text-center'>Tesla sets another record quarter with 310,048 vehicle deliveries in Q1 2022</h4>
            <p><small>“In the first quarter, we produced over 305,000 vehicles and delivered over 310,000 vehicles, despite ongoing supply chain challenges and factory shutdowns,” Tesla said in its release. “Tesla will post its financial results for the first quarter of 2022 after market close on</small></p>
        </Col>
        <Col xs={6} md={4}>this is header of right
        <Card>
        <Card.Img src="src\components\Header\img" alt="Card image" />
        </Card>
        </Col>
    </Row>
</Container>
    );
};

export default Header;