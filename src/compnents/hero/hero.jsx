import React from 'react';
import heropic from '../../assets/heropic.jpg'
import './hero.css'
import Bluebtn from '../bluebtn/bluebtn';

const Hero = () => {
    return ( 
        <>
            <div className="hero">
                <img className='heroimg' src={heropic} alt="" />
                <div className="herotxt">
                    <h1>CIB</h1>
                    <p>Delivering value to our clients, our
                        community and our shareholders </p>
                    <Bluebtn />
                </div>
            </div>
        
        
        </>
     );
}
 
export default Hero;