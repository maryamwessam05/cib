import React from 'react';
import Navbar from '../compnents/navbar/navbar';
import Hero from '../compnents/hero/hero';
import Section2 from '../compnents/section2/section2';
import Section3 from '../compnents/section3/section3';
import Section4 from '../compnents/section4/section4';
import img3 from '../assets/img3.png'
import './home.css'
import Bluebtn from '../compnents/bluebtn/bluebtn';
import Subtitle from '../compnents/secsubtitle/secsubtitle';
import Title from '../compnents/sectitle/title';
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'


const Home = () => {
    return ( 
        <>
        
        <Navbar />
        <Hero />
        <Section2 />
        <Section3 />
        <Section4 />

        <section className='section5'>
            <div className='sec5_inside'>
                <div className='sec5_left'>
                    <h2 className='sec5_h1'>CIB on an international scale</h2>
                    <p className='sec5text'>Learn more about CIB's presence outside of Egypt</p>
                    <Bluebtn />
            </div>
            </div>
        </section>

        <section className='section6'>
            <div className='sec6_title'>
                <Subtitle />
                <Title />
            </div>
            <div className='logos_div'>
                
                <div className='logos_inside'>
                    <img src={logo2} alt="" className='logos' />
                    <p className='logo_text'>S&P/EGX ESG Index</p>
                </div>
                
                <div className='logos_inside'>
                    <img src={logo3} alt="" className='logos' />
                    <p className='logo_text'>Bloomberg Gender Equality Index </p>
                </div>
                <div className='logos_inside'>
                    <img src={logo4} alt="" className='logos' />
                    <p className='logo_text'>FTSE4Good Index</p>
                </div>
            </div>
            <Bluebtn />
        </section>
        
        </>
     );
}
 
export default Home;