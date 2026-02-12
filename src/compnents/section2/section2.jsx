import React from 'react';
import './section2.css';
import Action from '../action/action' ;
import Subtitle from '../secsubtitle/secsubtitle';


const Section2 = () => {
    return ( 
        <>
        <div className="section2">

            <div className="options">
                <div className="actions">

                <Action />
                <Action />
                <Action />
                <Action />
                <Action />
                <Action />
                </div>
            </div>

            <div className="apply">
                <Subtitle />
            </div>


        </div>
        
        </>
     );
}
 
export default Section2;