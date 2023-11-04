import React, { useState } from 'react';

function UserPortal() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    // if (activeTab === 'contactSubmissions') {
    //   return <h2>Your Contact form submissions should be here.</h2>;
    // }
    if (activeTab === 'registeredUsers') {
      return <h2>registered users</h2>;
    } else {
      switch (activeTab) {
        case 'dashboard':
          return <h2>Welcome to Your Portal!</h2>;
        case 'settings':
          return <h2>Settings Content: no settings available</h2>; // can used reset password function here
        default:
          return <div>No data available or an error occurred.</div>;
      }
    }
  };

  return (
    <div className='content-container flex'>
      <div className='sidebar'>
        <div className='links'>
          <ul>
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={activeTab}
              >
                Dashboard
              </button>
            </li>
            {/* <li>
              <button onClick={() => setActiveTab('contactSubmissions')}>
                Contact Submissions
              </button>
            </li> */}
            {/* <li>
              <button onClick={() => setActiveTab('registeredUsers')}>
                Registered Users
              </button>
            </li> */}
            <li>
              <button onClick={() => setActiveTab('settings')}>Settings</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className='user-container'
        style={{ flexGrow: 1, color: 'whitesmoke' }}
      >
        {renderContent()}{' '}
      </div>
    </div>
  );
}
export default UserPortal;
