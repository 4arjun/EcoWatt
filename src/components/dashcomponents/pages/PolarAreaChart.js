import React, { useEffect, useRef } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const PolarAreaChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Room 1', 'Room 2', 'Room 3'],
    datasets: [
      {
        label: 'Room Usage',
        data: [300, 500, 200], // Example data for each room
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each segment
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  useEffect(() => {
    // Cleanup function to destroy the previous chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-1/2 mx-auto mt-10">
      <PolarArea ref={chartRef} data={data} />
    </div>
  );
};

export default PolarAreaChart;
