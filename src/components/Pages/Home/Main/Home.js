import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Navbar/Nav';
import Chef from '../Chef';
import FeatureDishes from '../FeatureDishes';
import Gallery from '../Gallery';
import Header from '../Header';
import Menu from '../Menu'
import OpeningHour from '../OpeningHour';
import OurStory from '../OurStory';
import Services from '../Services';
import TodaysFeature from '../TodaysFeature';


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <TodaysFeature></TodaysFeature>
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