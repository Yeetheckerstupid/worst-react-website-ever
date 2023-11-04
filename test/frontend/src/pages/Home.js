import '../styles/Home.css';

function Home() {
  return (
    <div className='content-container-home'>
      <div>
        <h1>Welcome to DER8.9</h1>
        <p>Part of JakaaGen Inc</p>
      </div>

      <div className='description'>
        <p>Don't DM CFC staff in Discord :)</p>
      </div>

      <div className='der-data'>
        <h2>DER Data Display</h2>
        <p>
          Access real-time data on our distributed energy resources and monitor
          their performance. Stay informed about energy production, consumption,
          and savings.
        </p>
        <a href='/der-data'>View DER Data</a>
      </div>

      <div className='social-proof'>
        <h2>Social Proof</h2>
        <div className='testimonial'>
          <img
            src={require('../assets/img/users/default.jpg')}
            alt='Customer 1'
          />
          <p>
            "DER8.9's renewable energy solutions have helped us reduce our
            energy costs and minimize our environmental impact. Highly
            recommended!"
          </p>
          <span>- John Doe, CEO of ABC Corporation</span>
        </div>
        <div className='testimonial'>
          <img
            src={require('../assets/img/users/default.jpg')}
            alt='Customer 2'
          />
          <p>
            "We are thrilled with the microgrid solution implemented by
            DER8.9. It has significantly improved our energy resiliency and
            reduced downtime during grid outages."
          </p>
          <span>- Jane Smith, Facilities Manager at XYZ Hospital</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
