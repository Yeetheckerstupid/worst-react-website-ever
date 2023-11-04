import { useParams } from 'react-router-dom';
import '../styles/DerData.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import DoughnutChart from '../components/charts/Doughnut';
import EffGauge from '../components/charts/EffGauge';
import TempGauge from '../components/charts/Gauge';

function DerData() {
  const { role } = useContext(AuthContext);
  const { id } = useParams();

  const userBasedContent = () => {
    if (!role) {
      return (
        <div className='der-wrapper'>
          <div className='title' colSpan={2}>
            <h2> No User is logged n</h2>
            <h2>Charts Examples</h2>
          </div>
          <div className='box'>
            <h3>Battery Efficiency</h3>
            <EffGauge />
          </div>
          <div className='box'>
            <h3> Battery Temperature</h3>

            <TempGauge />
          </div>
        </div>
      );
    }
    if (role === 'user') {
      return (
        <div className='der-wrapper'>
          <div className='title'>
            <h2> {role} View</h2>
            <h2>Charts Examples</h2>
          </div>
          <div className='box'>
            <h3>Battery Efficiency</h3>
            <EffGauge />
          </div>
          <div className='box'>
            <h3> Battery Temperature</h3>
            <TempGauge />
          </div>
          <div className='box'>
            <h3> Pie Chart Example</h3>
            <DoughnutChart />
          </div>
        </div>
      );
    }
    if (role === 'admin') {
      return (
        <div className='der-wrapper'>
          <div className='title'>
            <h2> {role} View</h2>
            <h2>Charts Examples</h2>
          </div>
          <div className='box'>
            <LineChart />
          </div>
          <div className='box'>
            <BarChart />
          </div>
          <div className='box'>
            <h3> Battery Temperature</h3>
            <TempGauge />
          </div>
          <div className='box'>
            <h3>Battery Efficiency</h3>
            <EffGauge />
          </div>
          <div className='box'>
            <h3>Pie Chart</h3>
            <DoughnutChart />
          </div>
        </div>
      );
    }
  };
  return <div className='content-container '>{userBasedContent()}</div>;
}

export default DerData;
