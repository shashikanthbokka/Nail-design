import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import AboutUs from '../AboutUs';
import Blocks from '../Blocks';
// import Prices from '../Prices';


function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs/>
      <Blocks/>

    </>
  );
}

export default Home;
