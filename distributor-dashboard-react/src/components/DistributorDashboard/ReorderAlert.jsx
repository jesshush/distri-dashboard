import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReorderAlert = () => {
  const stockLevels = [150, 75, 100, 50, 500];
  const stockColors = stockLevels.map(level => {
    if (level < 100) {
      return '#FF6384'; // Solid red
    } else if (level < 300) {
      return '#FFCE56'; // Solid yellow
    } else {
      return '#36A2EB'; // Solid blue
    }
  });

  const data = {
    labels: ['Drug A', 'Drug B', 'Drug C', 'Drug D', 'Drug E'],
    datasets: [{
      label: 'Stock Levels',
      data: stockLevels,
      backgroundColor: stockColors,
      borderColor: stockColors.map(color => color), // Use the same solid color for borders
      borderWidth: 1,
    }],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 600,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      {/* <h2>Reorder Alerts</h2> */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReorderAlert;
