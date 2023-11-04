import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
   const [data, setData] = useState([])
   useEffect(() => {
      const fetchData = () => {
        axios
          .get('/api/users/der-data/sql')
          .then((res) => {
            const icsData = res.data.data.data;
            console.log(icsData);
            setData(icsData)
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

    const avgUsage = ({
      labels: data.map((data) => data.month),
      datasets: [{
         label: 'Average Power Usage per month',
         data: data.map((data) => data.avg_usage),
         backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          // Add more colors as needed
        ],
      }]
   })
    console.log(data);

   // const data = {
   //    labels: ['yes', 'no'],
   //    datasets: [{
   //       label: 'Poll',
   //       data: [3,6],
   //       backgroundColor: ['black', 'red'],
   //       borderColor: ['black', 'red ']
   //    }]
   // }

   const options = {
  
   }


  return <Doughnut data={avgUsage} options={options} />;
}

export default DoughnutChart;
