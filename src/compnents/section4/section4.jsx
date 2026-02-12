import React from 'react';
import './section4.css';
import Title from '../sectitle/title';
import Newscard from '../newscard/newscard';
import Bluebtn from '../bluebtn/bluebtn';

const Section4 = () => {
    return ( 
        <>
        <div className="section4">
            <Title />
            <div className="news">
                <Newscard />
                <Newscard />
                <Newscard />
            </div>
            <Bluebtn />
        </div>        
        
        </>
     );
}
 
export default Section4;