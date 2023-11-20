import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;