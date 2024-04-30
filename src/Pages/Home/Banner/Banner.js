import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import equipments from '../../../media/images/equipments.jpg';
import dentistImg from '../../../media/images/dentist.png';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel variant='dark' className='my-2 py-3 container'>
            <Carousel.Item interval={2000} className=''>
                <Image src={equipments} className='w-100' />
                <Carousel.Caption className='text-light bg-dark bg-opacity-50'>
                    <h3 className=''>Modern Dentistry, Personal Touch</h3>
                    <p className='text-light fs-4 fw-semibold'>Delivering exceptional care with cutting-edge equipment, ensuring comfort and confidence in every smile.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image src={dentistImg} className='w-100' text="Second slide" />
                <Carousel.Caption className='text-dark bg-primary bg-opacity-25'>
                    <h3>Gentle Care, Strong Smiles</h3>
                    <p className='text-dark fs-4 fw-semibold'>Nurturing patients with compassionate treatment and leading-edge technology, fostering healthy and radiant smiles.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;