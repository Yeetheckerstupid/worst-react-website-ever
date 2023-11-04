import axios from 'axios';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';

function LineChart() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/api/users/der-data/sql')
        .then((res) => {
          const icsData = res.data.data.data;
          console.log(icsData);
          setData(icsData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
    // const intervalId = setInterval(fetchData, 300000);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  const avgUsage = {
    labels: data.map((data) => data.month),
    datasets: [
      {
        label: 'Average Solar Power Generated per Month',
        data: data.map((data) => data.avg_pwr_gen),
      },
      {
        label: 'Average Power used per Month',
        data: data.map((data) => data.avg_usage),
        borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'kWh',
          font: {
            size: 20, 
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 20, 
          },
        },
      },
    },
  };

  return <Line data={avgUsage} options={options} style={{ height: '100%' }} />;
}

export default LineChart;
