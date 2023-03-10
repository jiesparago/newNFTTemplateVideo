import React from 'react';

//Internal Import
import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter } from '../components/componentsindex'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection/>
      <Service/>
      <BigNFTSlider/>
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter/>
      <Title heading="Browse by Category" paragraph="Explore the NFTs in the most feature categories"/>
      <Category/>
      <Subscribe/>
      
    </div>
  )
}

export default Home;