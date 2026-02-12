import React from 'react';
import './card.css';
import cardicon from '../../assets/cibicon.svg';


const Card = () => {
    return ( 
        <>
            <div className="card">
                <img src={cardicon} alt="" />
                <h3>Apply for a New
                    Account </h3>
            </div>
        
        </>

     );
}
 
export default Card;