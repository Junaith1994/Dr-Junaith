import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import facilitiesImg from '../../../media/images/facilities.png';
import dentistImg from '../../../media/images/dentist.png';

const Banner = () => {
    return (
        <Carousel variant='dark' className='container'>
            <Carousel.Item interval={2000}>
                <Image src={facilitiesImg} className='w-100' />
                <Carousel.Caption className=''>
                    <h3>Equiped with latest technology</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image src={dentistImg} className='w-100' text="Second slide" />
                <Carousel.Caption className=''>
                    <h3>A safe hand</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;