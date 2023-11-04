import axios from 'axios';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS } from 'chart.js/auto';

function BarChart() {
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

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const avgUsage = {
    labels,
    datasets: [
      {
        label: 'Average Power Usage per month',
        data: data.map((data) => data.avg_usage),
      },
      {
        label: 'Average Power Generated',
        data: data.map((data) => data.avg_pwr_gen),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
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
  return <Bar data={avgUsage} options={options} />;
}

export default BarChart;
