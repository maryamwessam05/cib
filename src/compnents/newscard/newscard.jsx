import React from 'react';
import newsimg from '../../assets/newsimg.png';
import './newscard.css';

const Newscard = () => {
    return ( 
        <>
            <div className="newscard">
                <img src={newsimg} alt="" />
                <div className="cardtxt2">
                    <p>08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
                        Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
                        Halan Consumer Finance, Worth EGP 3.4 Billion</p>
                    <h2>Commercial International Bank (CIB) Has Partnered 
                        with CI Capital to Successfully Closes the Seventh 
                        Securitization Bond Issuance for Halan Consumer 
                        Finance, Worth EGP 3.4 Billion</h2>
                    <p>CIB, Egypt's leading and largest private sector bank, has successfully partnered 
                        with CI Capital to complete the seventh issuance for Halan Consumer Finance, 
                        valued at EGP 3.4 billion.</p>
                </div>
            </div>
        
        
        </>

     );
}
 
export default Newscard;