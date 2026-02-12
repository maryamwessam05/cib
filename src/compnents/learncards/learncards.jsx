import React from 'react';
import './learncards.css';
import cardimg from '../../assets/img2.png'

const Learncard = () => {
    return ( 
            <>
            <div className="lcard">
                <div className="cardcont">
                    <img src={cardimg} alt="" />
                    <div className="cardtxt">
                        <h3>Buying and making a home</h3>
                        <p>Buying a home can be an emotional process, 
                            but its important to approach it 
                            logically</p>
                    </div>

                    <div className="readmore">
                        <p>Read more</p>
                    </div>
                </div>
            </div>
            
            </>
     );
}
 
export default Learncard;