import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Features.css';

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
    });
  }, []);

  const featuresData = [
    {
      icon: '🚀',
      title: 'Real-time Tracking',
      description: 'Monitor your energy consumption instantly.',
    },
    {
      icon: '📊',
      title: 'Predictive Billing',
      description: 'Plan and adjust your energy habits with accurate bill predictions.',
    },
    {
      icon: '🌐',
      title: 'Efficiency Rankings',
      description: 'Compare your energy efficiency with neighboring households.',
    },
    {
      icon: '🌿',
      title: 'Carbon Footprint Assessment',
      description: 'Gain insights into the environmental impact of your energy use.',
    },
    {
      icon: '🔔',
      title: 'Proactive Notification System',
      description: 'Set limits and receive instant alerts, encouraging proactive energy-saving measures.',
    },
    {
      icon: '🔒',
      title: 'Secure Data Management',
      description: 'Ensure the security and privacy of your energy consumption data.',
    },
  ];

  return (
    <div className="features-container">
      <h2>Key Features</h2>
      <div className="features-list">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature"
            data-aos={index % 2 === 0 ? 'fade-up' : 'flip-left'} // Alternate animations
            data-aos-offset="300" // Offset from the bottom of the viewport
            data-aos-delay={index * 100} // Stagger animations
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
