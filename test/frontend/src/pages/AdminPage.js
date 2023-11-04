import React, { useEffect, useContext } from 'react';
import '../styles/AdminPage.css';
import { AdminContext } from '../context/AdminContext';
import { AuthContext } from '../context/AuthContext';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import DoughnutChart from '../components/charts/Doughnut';
import EffGauge from '../components/charts/EffGauge';
import TempGauge from '../components/charts/Gauge';
import AdminSideBar from '../components/AdminSidbar';
import AdminReqCards from '../components/AdminReqCards';
import AdminUserCards from '../components/AdminUserCards';


function AdminPage() {
  const { role } = useContext(AuthContext);
  const {
    fetchContactRequests,
    fetchUsers,
    registeredUsers,
    activeTab,
  } = useContext(AdminContext);

  useEffect(() => {
    if (activeTab === 'contactSubmissions') {
      fetchContactRequests();

    }
    if (activeTab === 'registeredUsers') {
      fetchUsers();
    }
  }, [activeTab]);

  const renderContent = () => {
    if (activeTab === 'contactSubmissions') {
      return <AdminReqCards />;
    }
    if (activeTab === 'registeredUsers') {
      return <AdminUserCards />;
    }
    else {
      switch (activeTab) {
        case 'dashboard':
          return <div>
            <h2>Admin Dashboard</h2>

            <div className="adminPageParagraphs">JakaaGen Inc, DER8.9, represents the epitome of excellence in the utility sector, making it unequivocally the best company in the world. Our cutting-edge Distributed Energy Resources (DER) solutions have not only disrupted the industry but have also seamlessly integrated into the energy grid, optimizing efficiency and sustainability. Leveraging our forward-thinking mindset, we've synergized innovation with cross-functional collaboration, fostering a dynamic ecosystem where employees are empowered to think outside the box and embrace the utility of the future. Our commitment to harnessing the power of Big Data, IoT, and AI in a holistic manner has resulted in unparalleled operational excellence and customer satisfaction. JakaaGen Inc, DER8.9, is not just a workplace; it's a transformative journey where we embark on a mission to redefine the energy landscape while upholding our core values of sustainability, innovation, and customer-centricity. Join us, and together, let's embark on an extraordinary voyage towards a brighter, greener, and more connected future.</div>

            <div className="adminPageParagraphs">Creating new job positions is essential for expanding a company's capabilities and responding to evolving market demands. These positions offer opportunities for both current employees seeking growth and external talent to contribute their expertise and drive organizational success.</div>


            <ul className="adminJobPositions">
              <li><b>Chief Pencil Sharpener Officer (CPSO)</b>: Ensure all our DER8.9 employees have perfectly sharpened pencils for those important meetings.</li>
              <li><b>Executive Chair-Fluffer Specialist</b>: Keep our executive team's chairs comfortable and fluffy at all times.</li>
              <li><b>Chief Office Plant Whisperer</b>: Communicate empathetically with our office plants and ensure they thrive in their work environment.</li>
              <li><b>Director of Quantum Coffee Brewing</b>: Lead our cutting-edge quantum coffee brewing experiments for maximum productivity.</li>
              <li><b>Virtual Unicorn Wrangler</b>: Manage our virtual unicorn herd in the metaverse; experience with rainbow maintenance preferred.</li>
              <li><b>Submarine Sandwich Architect</b>: Craft exquisite submarine sandwiches for our daily team lunches with precision and artistry.</li>
              <li><b>Director of Employee Napping Optimization</b>: Ensure our employees achieve peak nap performance with personalized nap schedules.</li>
              <li><b>Space-Time Continuum Analyst</b>: Responsible for maintaining the integrity of the space-time continuum within our office.</li>
              <li><b>Director of Office Chair Racing</b>: Organize and oversee the highly competitive sport of office chair racing.</li>
              <li><b>Head of Meme Generation and Dissemination</b>: Spearhead our meme strategy to keep company culture fun and engaging.</li>
            </ul>

          </div >;
        case 'settings':
          return <h2>Settings Content</h2>;
        default:
          return <div>No data available or an error occurred.</div>;
      }
    }
  };

  return (
    <div className='content-container flex'>
      <AdminSideBar />

      <div className='admin-container'>{renderContent()}</div>
    </div>
  );
}

export default AdminPage;
