import React from 'react';
import Navbar from '../compnents/navbar/navbar';
import Hero from '../compnents/hero/hero';
import Section2 from '../compnents/section2/section2';
import Section3 from '../compnents/section3/section3';
import Section4 from '../compnents/section4/section4';
import img3 from '../assets/img3.png'
import './home.css'
import Bluebtn from '../compnents/bluebtn/bluebtn';

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
        
        </>
     );
}
 
export default Home;