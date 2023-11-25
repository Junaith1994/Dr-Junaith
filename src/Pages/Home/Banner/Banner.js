import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import facilitiesImg from '../../../media/images/facilities.png';
import dentistImg from '../../../media/images/dentist.png';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant='dark' className='container'>
            <Carousel.Item interval={2000}>
                <Image src={facilitiesImg} className='w-100' />
                <Carousel.Caption className=''>
                    <h3>Luxury Redefined in Dentistry</h3>
                    <p className='banner-text-color fs-4 fw-semibold'>Step into opulence at our dental chamber, featuring three state-of-the-art patient seats, where comfort meets cutting-edge dental excellence.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image src={dentistImg} className='w-100' text="Second slide" />
                <Carousel.Caption className=''>
                    <h3>My best practice and care for each patient</h3>
                    <p className='text-primary fs-4 fw-semibold'>A skilled dentist ensures optimal oral health, meticulously examining each patient, delivering personalized care with expertise and compassion.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;