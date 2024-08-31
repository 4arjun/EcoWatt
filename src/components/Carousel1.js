import './Carousel1.css';
import img from '../images/pexels-ssteenbergenn-2966315.jpg';
import React from 'react';

const Carousel1 = () => {

    return (
        <div className='carousel-container'>
            <div className='carousel-img'>
                <img src={img} alt='img' />
                <div className='img-text'>
                    <div className='img-text-container'>
                    <h1 className='img-font'>
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span>e</span>
                        <span style={{ paddingLeft: '5px' }}> </span>
                        <span>t</span>
                        <span>o</span>
                        <span style={{ paddingLeft: '5px' }}> </span>
                        <span>A</span>
                        <span>m</span>
                        <span>p</span>
                        <span>P</span>
                        <span>a</span>
                        <span>y</span>
                    </h1>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default Carousel1;
