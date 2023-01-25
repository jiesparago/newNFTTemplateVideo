import React from 'react';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import {RiSendPlaneFill} from 'react-icons/ri'

//Internal Import
import Style from './Footer.module.css';
import images from '../../img';
import {Discover, HelpCenter} from '../NavBar/index';


const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={100}/>
          <p>
            The world's first and largest digital marketplace for collectibles and non-fungible tokens (NFTs). Buy, sell,exclusive digital items.
          </p>
          <div className={Style.footer_social}>
            <a href="#"><TiSocialFacebook/></a>
            <a href="#"><TiSocialLinkedin/></a>
            <a href="#"><TiSocialTwitter/></a>
            <a href="#"><TiSocialInstagram/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer