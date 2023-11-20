import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    // Destructured review info of Patent
    const { name, img, reviewText, socialLink } = review;

    return (
        <Card className='col-12 col-md-4 border-0 shadow-lg p-2 mb-2 bg-body-tertiary rounded-4'>
            <Card.Img variant="top" src={img} />
            <Card.Body className='text-center'>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{reviewText}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;