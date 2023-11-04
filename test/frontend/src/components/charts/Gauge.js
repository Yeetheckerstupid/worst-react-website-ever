import GaugeComponent from 'react-gauge-component';
import { useEffect, useState } from 'react';
import axios from 'axios';

function TempGauge() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get('/api/users/der-data/sql')
        .then((res) => {
          const icsData = res.data.data.temp;

          const batt_temp = icsData[icsData.length - 1].battery_temp;
          setData(batt_temp);
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
      type='semicircle'
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        // gradient: true,
        subArcs: [
          {
            limit: 0,
            color: '#EA4228',
            showMark: true,
            tooltip: {
              text: 'Too low temperature!',
            },
          },
          {
            limit: 50,
            color: '#F5CD19',
            showMark: true,
            tooltip: {
              text: 'Low temperature!',
            },
          },
          {
            limit: 100,
            color: '#5BE12C',
            showMark: true,
            tooltip: {
              text: 'OK temperature!',
            },
          },
          {
            limit: 150,
            color: '#F58B19',
            showMark: true,
            tooltip: {
              text: 'High temperature!',
            },
          },
          {
            color: '#EA4228',
            tooltip: {
              text: 'Too high temperature!',
            },
          },
        ],
      }}
      pointer={{
        color: '#345243',
        length: 0.8,
        width: 15,
        // elastic: true,
      }}
      labels={{
        valueLabel: { formatTextValue: (value) => value + 'ºF' },
        // code below is for adding extra labels
        //   markLabel: {
        //     type: 'outer',
        //     valueConfig: { formatTextValue: value => value + 'ºF', fontSize: 20 },
        //     marks: [
        //       { value: 13 },
        //       { value: 22.5 },
        //       { value: 32 }
        //     ],
        //   }
      }}
      value={data}
      minValue={0}
      maxValue={200}
    />
  );
}

export default TempGauge;
