import React from 'react';
import './section2.css';
import Action from '../action/action' ;
import Subtitle from '../secsubtitle/secsubtitle';
import Title from '../sectitle/title';
import Card from '../card/card';


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
                <div className="headers">
                <Subtitle />
                <Title />

                </div>

                <div className="cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>


        </div>
        
        </>
     );
}
 
export default Section2;