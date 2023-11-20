import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review }) => {
    // Destructured review info of Patent
    const { name, img, reviewText, socialLink } = review;

    return (
        <Card className='col-12 col-md-4 border-0 shadow-lg p-2 mb-2 bg-body-tertiary rounded-4'>
            <div className='text-center'>
                <Card.Img className='w-50 rounded-3' variant="top" src={img} />
            </div>
            <Card.Body className='text-center'>
                <Card.Link target='_blank' href={socialLink} className='fw-semibold fs-5 text-primary'>{name}</Card.Link>
                <Card.Text>{reviewText}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Review;