import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DrugDemand = () => {
  const data = {
    labels: ['Region A', 'Region B', 'Region C', 'Region D', 'Region E'],
    datasets: [
      {
        label: 'Drug Type 1',
        data: [300, 250, 400, 200, 350],
        backgroundColor: '#007BFF', // Vibrant blue
        stack: 'Stack 0',
      },
      {
        label: 'Drug Type 2',
        data: [200, 300, 200, 150, 250],
        backgroundColor: '#28A745', // Emerald green
        stack: 'Stack 0',
      },
      {
        label: 'Drug Type 3',
        data: [150, 100, 300, 100, 200],
        backgroundColor: '#FFC107', // Amber
        stack: 'Stack 0',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12, // Slightly larger font size for better readability
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 12, // Slightly larger font size for better readability
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          font: {
            size: 12, // Slightly larger font size for better readability
          },
        },
      },
    },
  };

  return (
    <div style={{ width: '90%', height: '350px', margin: 'auto' }}> {/* Centered and slightly larger chart container */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default DrugDemand;
