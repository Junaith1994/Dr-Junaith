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
                    <p>Since childhood I was very interested in technology. My goal is to start my career as a <b>Junior Web Developer</b> within 4-5 months after finishing this course successfully In sha Allah. For this I will in Sha Allah create 2-3 persolanized projects and after this I will create my portfolio website and will add necessary things to it with all my projects, In sha Allah. Then I will create me CV and get myself prepared for the interview In sha Allah.</p>
                </div>
            </div>
        </div>
    );
};

export default About;