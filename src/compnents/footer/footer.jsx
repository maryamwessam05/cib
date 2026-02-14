import React from 'react';
import './footer.css'
import logo from '../../assets/logo.png'
import Link from '../links/link';
import gogleplay from '../../assets/gogleplay.png'
import appstore from '../../assets/appstore.png'
import bgleft from '../../assets/bgleft.png'
import bgright from '../../assets/bgright.png'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import x from '../../assets/x.svg'
import whatsapp from '../../assets/whatsapp.svg'

const Footer = () => {
  return ( 
    <footer>
      <div className='footer_inside'>
        <img className='bgleft' src={bgleft} alt="" />
        <img className='bgright' src={bgright} alt="" />
        <div className='footer_top'>
        <img className='foot_logo' src={logo} alt="" />
        <div className='footer_links'>
          <div className='col'>
            <Link />
            <Link />
            <Link />
            <Link />
          </div>
          <div className='col'>
            <Link />
            <Link />
            <Link />
            <Link />
          </div>
          <div className='col'>
            <Link />
            <Link />
            <Link />
            <Link />
          </div>
        </div>
        <div className='footer_right'>
          <img src={gogleplay} alt="" />
          <img src={appstore} alt="" />
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='footbot_left'>
          <Link />
          <Link />
          <Link />
          <Link />
        </div>
        <div className='footbot_right'>
           <img className='foot_social' src={facebook} alt="" />
           <img className='foot_social' src={instagram} alt="" />
           <img className='foot_social' src={linkedin} alt="" />
           <img className='foot_social' src={youtube} alt="" />
           <img className='foot_social' src={x} alt="" />
           <img className='foot_social' src={whatsapp} alt="" />
        </div>
      </div>
      </div>

      <div className='footer_outside'>
        <p>Copyright © 2025 Commercial International Bank</p>
      </div>
      
    </footer>

   );
}
 
export default Footer;