import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Chef from '../Chef';
import FeatureDishes from '../FeatureDishes';
import Gallery from '../Gallery';
import Header from '../Header';
import Menu from '../Menu';
import OpeningHour from '../OpeningHour';
import OurStory from '../OurStory';
import Services from '../Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <OurStory></OurStory>
            <Services></Services>
            <FeatureDishes></FeatureDishes>
            <Menu></Menu>
            <Chef></Chef>
            <OpeningHour></OpeningHour>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;