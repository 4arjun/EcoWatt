import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const Zone = () => {
  const data = {
    labels: ['Room 1', 'Room 2', 'Room 3'],
    datasets: [
      {
        label: 'Room Usage',
        data: [300, 500, 200], // Example data for each room
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Different colors for each slice
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="w-1/2 mx-auto mt-10">
        <h1>Consumption by zones</h1>
      <Pie data={data} />
    </div>
  );
};

export default Zone;
