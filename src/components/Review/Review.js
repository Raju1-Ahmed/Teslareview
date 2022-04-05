import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Card from '../Card/Card';


const Review = (props) => {
    const [reviews, setReview] = useReview();
    // console.log(review.name);
    // const {name} = props.review;

    return (
    <Container>

               <Row>
        <Col>

            <div>
            {
            reviews.map(review => <Card
            key={review.id}
            review={review}
            />)
        }
            </div>
        </Col>
    </Row>
    </Container>
    );
};

export default Review;