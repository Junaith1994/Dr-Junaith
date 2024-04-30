import React, { useEffect, useState } from 'react';
import Review from './Review/Review';

const Reviews = () => {
    // Reviews State
    const [reviews, setReviews] = useState([]);
    // console.log(reviews);

    // Fetching reviews data
    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='container my-5'>
            <h1 className='text-center'>What My Patients Say</h1>
            <div className='row row-gap-3'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;