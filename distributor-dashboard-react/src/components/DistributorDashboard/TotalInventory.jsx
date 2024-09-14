import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TotalInventory = () => {
  const data = {
    labels: ['Paracetamol', 'Drug B', 'Drug C', 'Drug D', 'Drug E'],
    datasets: [
      {
        label: 'Current Stock',
        data: [1200, 800, 1500, 500, 1100],
        backgroundColor: '#5D3FD3', // Dark Purple
        borderColor: 'transparent', // No border
        borderWidth: 0, // Remove border width
      },
      {
        label: 'Near Expiry',
        data: [100, 50, 200, 20, 150],
        backgroundColor: '#F5A623', // Warm Orange
        borderColor: 'transparent', // No border
        borderWidth: 0, // Remove border width
      },
      {
        label: 'Allocated for Shipment',
        data: [300, 200, 400, 100, 250],
        backgroundColor: '#50B3A2', // Soft Teal
        borderColor: 'transparent', // No border
        borderWidth: 0, // Remove border width
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
          boxWidth: 25,
          font: {
            size: 12,
            weight: 'normal', // Regular weight for labels
          },
        },
      },
      title: {
        display: true,
        text: 'Inventory Distribution by Drug Type',
        font: {
          size: 14,
          weight: 'bold',
        },
        padding: {
          top: 20,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const { index } = elements[0];
        const drugLabel = data.labels[index];
        window.location.href = `/drug/${drugLabel}`;
      }
    },
  };

  return (
    <div style={{ width: '90%', height: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TotalInventory;
