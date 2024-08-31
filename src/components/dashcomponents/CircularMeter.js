// CircularMeter.js
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularMeter = ({ value, size = 200 }) => {
  // Determine the color based on the value
  const getPathColor = (value) => {
    if (value > 90) return '#ff4d4d'; // Red for values above 90
    if (value > 50) return '#ff9900'; // Orange for values above 50
    return '#00ff80'; // Default color
  };

  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbarWithChildren
        value={value}
        styles={buildStyles({
          rotation: 0.75, // Rotate to start from the top
          strokeLinecap: 'butt', // Flat ends
          pathColor: getPathColor(value), // Dynamic color based on value
          trailColor: '#d6d6d6', // Color for the trail
          pathTransform: 'rotate(135deg)',
          pathTransition: 'stroke-dashoffset 0.5s ease 0s',
        })}
        strokeWidth={10}
      >
        <div style={{ textAlign: 'center', marginTop: -size / 15 }}>
          <div className='text-black text-3xl'>
            Carbon Footprint
          </div>
          <h1 className='text-2xl font-bold text-slate-800'>
            <b className='text-8xl'>{value}</b> KG CO<sub>2</sub>
          </h1>
        </div>
        <div className='text-xs text-black w-[150px] mt-5'>
          Total amount of greenhouse gases (GHGs) emitted into the atmosphere, expressed as equivalent tons of carbon dioxide (CO₂).
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularMeter;
