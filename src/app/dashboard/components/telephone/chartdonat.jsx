"use client"
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DynamicDoughnutChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              labels: ['System & Procedure', 'Hard Skill', 'Soft Skill', 'Enjoying'],
              datasets: [
                {
                  label: 'Agents',
                  data: [12, 19, 14, 17],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                  ],
                  borderWidth: 1,
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
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Detail Report on System & Skills',
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

export default DynamicDoughnutChart;
