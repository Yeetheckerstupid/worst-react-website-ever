import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className='content-container'>
      <div className='about-container'>
        <div className='home-header'>
          <h1>About DER8.9</h1>
        </div>

        <div className='description'>
          <p>
            A part of JakaaGen Inc, DER8.9 is a leading utility company specializing in Distributed
            Energy Resources (DER). We are committed to transforming the energy
            sector by leveraging renewable energy sources and advanced
            technologies. Our mission is to provide sustainable energy solutions
            that promote environmental stewardship and empower communities.
          </p>
          <p>
            With our expertise in DER, we offer a range of innovative services
            to our customers. Our team of skilled professionals designs,
            installs, and maintains state-of-the-art solar photovoltaic systems
            for residential, commercial, and industrial applications. We also
            provide cutting-edge energy storage solutions, utilizing advanced
            battery technologies, to store excess energy generated from
            renewable sources.
          </p>
          <p>
            At DER8.9, we believe in the power of microgrids. We specialize in
            developing and implementing customized microgrid solutions that
            integrate various energy resources, ensuring reliable and efficient
            power supply. Additionally, we assist our customers in participating
            in demand response programs to actively manage their energy
            consumption during high-demand periods.
          </p>
          <p>
            Our commitment to sustainability extends beyond generation and
            storage. We offer energy management and monitoring solutions that
            empower our customers to track, analyze, and optimize their energy
            usage in real-time. By providing actionable insights, we enable our
            customers to make informed decisions that reduce their carbon
            footprint and enhance energy efficiency.
          </p>
          <p>
            Join us on this exciting journey towards a greener tomorrow with
            DER8.9. Together, let's power a sustainable future.
          </p>
        </div>

        <div className='services-heading'>
          <h2>Our Services</h2>
        </div>
        <div className='services'>
          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Solar Power Solutions</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/solarpanel.jpg')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <span>
                We design, install, and maintain state-of-the-art solar
                photovoltaic systems for residential, commercial, and industrial
                applications.
              </span>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Batteries</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/energystorage.jpeg')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <span>
                We offer cutting-edge energy storage solutions, utilizing
                advanced battery technologies, to store excess energy generated
                from renewable sources.
              </span>
            </div>
          </div>

          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Macrogrid Development</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/energy-management-system-for-microgrids.png')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <span>
                DER8.9 specializes in developing and implementing customized
                microgrid solutions that integrate various energy resources.
              </span>
            </div>
          </div>

          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Demand Response Programs</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/IEC–DRP_IMAGE1.jpg')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <span>
                We assist our customers in participating in demand response
                programs to actively manage their energy consumption during
                high-demand periods.
              </span>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Hacking into servers with a tablet</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/shutterstock_1504979759-1-scaled.jpg')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <span>
                Our innovative energy management software enables customers to
                track, analyze, and optimize their energy usage in real-time.
              </span>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-header'>
              <div className='card-heading'>
                <h3>Smart Grid Integration</h3>
              </div>
            </div>
            <div className='card-img-wrap'>
              <img
                src={require('../assets/img/smart-grid.jpg')}
                className='card-image'
                alt='solar panel instalation'
              />
            </div>
            <div className='service-card-details'>
              <div>
                <span>
                  Our Smart Grid Integration service helps clients seamlessly
                  integrate their energy systems with smart grid technologies.
                  By leveraging advanced data analytics and real-time
                  monitoring, we optimize energy distribution, improve grid
                  reliability, and enable efficient energy management.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='call-to-action'>
          <p>
            Join us on this exciting journey towards a greener tomorrow with
            DER8.9. Together, let's power a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
