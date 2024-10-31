"use client"
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const DynamicLineChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'System & Procedure',
                  data: [12, 15, 14, 13, 10, 8, 9, 7, 6, 5, 4, 3],
                  borderColor: 'rgba(255, 99, 132, 1)',
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  fill: true,
                },
                {
                  label: 'Hard Skill',
                  data: [19, 18, 20, 21, 17, 16, 18, 19, 15, 14, 13, 12],
                  borderColor: 'rgba(54, 162, 235, 1)',
                  backgroundColor: 'rgba(54, 162, 235, 0.2)',
                  fill: true,
                },
                {
                  label: 'Soft Skill',
                  data: [10, 12, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4],
                  borderColor: 'rgba(255, 206, 86, 1)',
                  backgroundColor: 'rgba(255, 206, 86, 0.2)',
                  fill: true,
                },
                {
                  label: 'Enjoying',
                  data: [15, 13, 12, 14, 13, 15, 14, 13, 12, 11, 10, 9],
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
                text: 'System, Skill, and Enjoying Data',
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
