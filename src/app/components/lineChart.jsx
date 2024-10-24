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
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Agents',
                  data: [12, 19, 3, 5, 2, 3],
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
                text: 'Agents Data',
              },
            },
          }}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default DynamicLineChart;
