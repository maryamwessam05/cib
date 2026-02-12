import React from 'react';
import Subtitle from '../secsubtitle/secsubtitle';
import Title from '../sectitle/title';
import './section3.css';
import Learncard from '../learncards/learncards';
import Bluebtn from '../bluebtn/bluebtn';


const Section3 = () => {
    return ( 
        <>
            <div className="section3">
                <div className="headers">
                    <Subtitle />
                    <Title />

                </div>

                <div className="cards">
                    <Learncard />
                    <Learncard />
                    <Learncard />
                </div>

                <Bluebtn />
            </div>
        </>
     );
}
 
export default Section3;