import React from 'react';
import './Style.css';

import shape from '../../../media/highlight.svg'
import arrow from '../../../media/arrow.svg'


const HeroBanner = () => {
    return (
        <>
         <section className='herobanner'>
             <div className='container'>
                 <img src={shape} alt="shape" />
                 <h1>FIND THE BEST USED CAR FOR YOUR BUDGET</h1>
                 <img src={arrow} alt="arrow" />
             </div>
         </section>   
        </>
    );
};

export default HeroBanner;