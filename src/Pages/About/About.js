import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-bg'>
            <div className='row justify-content-center w-100'>
                <h1 className='text-center col-12 my-3 text-light'>About Me</h1>
                <img className='col-md-4 col-9 rounded-4' src="https://i.ibb.co/x8Gfb9x/junaith.jpg" alt="" />
                <div className='col-md-6 col-9 text-light'>
                    <h3>I am <span className='name-color fw-bold fs-1'>Junaith Bin Elias Khan</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloremque! Rerum facilis quod quo libero aliquam distinctio animi dicta aliquid, repudiandae hic deleniti consequatur dolor ab nisi necessitatibus assumenda quaerat nam, illum laboriosam neque saepe ipsam eligendi. Dignissimos sequi debitis architecto praesentium explicabo doloribus vel aliquam, velit, labore possimus autem?</p>
                </div>
            </div>
        </div>
    );
};

export default About;