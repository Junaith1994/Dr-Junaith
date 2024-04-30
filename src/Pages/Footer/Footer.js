import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-bg row w-100 text-center'>
            <div className='col-md-3 col-12 my-3'>
                <img className='w-50' src="https://i.ibb.co/Hg2gXRL/teeth-cleaned003.png" alt="" />
            </div>
            {/* Oral Health Blog */}
            <div className='col-md-3 col-12 my-3'>
                <h3 className='text-light'>Explore Oral Health Blog</h3>
                <ul>
                    <p><Link to='https://smile2impress.com/us/blog/future-innovations-dentistry' target='_blank' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Latest Advances in Dental Care</Link>
                    </p>
                    <p><Link to="https://www.drdena.com/post/how-to-choose-the-right-toothbrush.html" target='_blank' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Tips for Choosing the Right Toothbrush</Link></p>
                    <p><Link to="https://www.healthline.com/health/dental-and-oral-health/home-remedies-for-toothache#saltwater-rinse" target='_blank' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Tips for Tooth Pain</Link></p>
                    <p><Link to="https://www.nhs.uk/conditions/root-canal-treatment/#:~:text=Contents&text=Root%20canal%20treatment%20(endodontics)%20is,have%20to%20be%20removed%20completely." target='_blank' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Root Cannel Treatment</Link></p>
                </ul>
            </div>
            {/* Quick Links */}
            <div className='col-md-3 col-12 my-3'>
                <h3 className='text-light'>Quick Links</h3>
                <ul>
                    <p><Link to='/home' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Home</Link>
                    </p>
                    <p><Link to='/services' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Services</Link>
                    </p>
                    <p><Link to='/about' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>About me</Link>
                    </p>
                    <p><Link to='/blogs' className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>Blogs</Link>
                    </p>
                </ul>
            </div>
            <div className='col-md-3 col-12 my-3 text-light'>
                <h3>Contact Me</h3>
                <div>
                    <h5>Address</h5> <address>House No-5 barrister sultan R/A, Moinna para, Boropol, Chittagong.</address>
                    <h5>Phone</h5>
                    <span>01627676315</span>
                    <h5>Email</h5>
                    <>daya2018ctg@gmail.com</>

                </div>
            </div>
            <div className='col-12 text-light'>
                <p>&copy; 2023 Dr. Junaith. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;