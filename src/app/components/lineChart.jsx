"use client"
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const DynamicLineChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Email',
                  data: [12, 15, 14, 13, 10, 8, 9, 7, 6, 5, 4, 3], // contoh data email
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  fill: true,
                },
                {
                  label: 'Recording',
                  data: [19, 18, 20, 21, 17, 16, 18, 19, 15, 14, 13, 12], // contoh data recording
                  borderColor: 'rgba(54, 162, 235, 1)',
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  fill: true,
                },
              ],
            }),
          1000
        )
      );

      setChartData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {chartData.datasets.length > 0 ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Email and Recording Data',
              },
            },
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DynamicLineChart;
