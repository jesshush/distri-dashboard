import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ShipmentStatus = () => {
  const data = {
    labels: ['In Transit', 'Delayed', 'Delivered'],
    datasets: [{
      label: 'Shipment Status',
      data: [30, 15, 55],
      backgroundColor: ['#36A2EB', '#FFCE56', '#4BC0C0'], // Solid colors
      borderColor: ['#ffffff', '#ffffff', '#ffffff'], // White borders for contrast
      borderWidth: 2, // Increase border width for more separation between segments
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
  };

  return (
    <div>
      {/* <h2>Shipment Status</h2> */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default ShipmentStatus;
