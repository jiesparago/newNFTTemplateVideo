import React from 'react';

//Internal Import
import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Subscribe, Title } from '../components/componentsindex'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most feature categories"/>

      <Subscribe/>
      
    </div>
  )
}

export default Home;