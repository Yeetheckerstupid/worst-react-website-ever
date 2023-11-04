import GaugeComponent from 'react-gauge-component'
import { useEffect, useState } from 'react';
import axios from 'axios';

function EffGauge() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/api/users/der-data/sql')
        .then((res) => {
          const icsData = res.data.data.eff;

         const invEff = icsData[(icsData.length - 1)].inv_eff
          setData(invEff);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  



  return (
   <GaugeComponent
   style={{ width: '95%'}}
   gradient={true}
   arc={{
      subArcs: [
        {
          limit: 20,
          color: '#EA4228',
          showMark: true
        },
        {
          limit: 40,
          color: '#F58B19',
          showMark: true
        },
        {
          limit: 60,
          color: '#F5CD19',
          showMark: true
        },
        {
          limit: 100,
          color: '#5BE12C',
          showMark: true
        },
      ]
    }}
    labels={{
    markLabel: {
      type: 'outer',
      // valueConfig: { formatTextValue: value => value + 'ºF', fontSize: 20 },
      marks: [
        {value: 80},
      ]
    }
    }}
    value={data} 
   />
  ) 
  ;
}

export default EffGauge;
