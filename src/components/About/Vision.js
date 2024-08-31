import './Vision.css'
import { useState,useEffect, useRef } from 'react';

const Vision = () => {
    const [visibleHeader, setVisibleHeader] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setVisibleHeader(true);
                } else {
                    setVisibleHeader(false);
                }
            },
            { threshold: 0.1 } 
        );
        observer.observe(sectionRef.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    return (
        <div id='vision' className="vision-container" ref={sectionRef}>
            <div className='vision-inner'>
            <h1 className={`vision-title ${visibleHeader ? 'active_header' : 'hidden'}`}>About</h1>
          <header className="vision-header">
            <p className={`vision-title ${visibleHeader ? 'active_header' : 'hidden'}`}>We’re AmpPay, Lighting the Way to Energy Efficiency</p>
          </header>
          <div className='vision-bottom'>
          <div className="vision-intro">
            <p>Welcome to AmpPay – your gateway to empowered energy management. Founded by a team passionate about sustainability, AmpPay offers a comprehensive solution for tracking, managing, and optimizing energy consumption. What sets us apart is our commitment to innovation and our dedication to empowering users to make informed decisions about their energy usage. At AmpPay, we value sustainability, efficiency, and community, and our platform offers real-time tracking, predictive insights, and personalized recommendations to help you achieve your energy goals. Explore AmpPay today and take control of your energy consumption like never before.</p>
          </div>
          <hr></hr>
          <div className='vision-img'>
            <img src="https://adamsyy.github.io/tedx-2022/metamorphosis-removebg.png"/>
          </div>
          </div>
          </div>
        </div>
      );
}

export default Vision