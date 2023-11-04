import { AdminContext } from '../context/AdminContext';
import { useContext } from 'react';

const AdminSideBar = () => {
  const { setActiveTab, activeTab } = useContext(AdminContext);
  return (
    <div className='sidebar'>
      <div className='links'>
        <ul>
          <li>
            <button
              onClick={() => setActiveTab('dashboard')}
              className={activeTab === 'dashboard' ? 'active' : ''}
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('contactSubmissions')}
              className={activeTab === 'contactSubmissions' ? 'active' : ''}
            >
              Contact Submissions
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('registeredUsers')}
              className={activeTab === 'registeredUsers' ? 'active' : ''}
            >
              Registered Users
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab('settings')}
              className={activeTab === 'settings' ? 'active' : ''}
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
