import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer_wrapper'>
      <footer>
        <div className='img-container'>
          <Link to='/'>
            <img
              className='logo'
              src={require('../assets/img/DER8-9.png')}
              alt='logo'
            />
          </Link>
        </div>

        <div>
          <ul className='footer_links'>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='/der-data'>DER Data</Link>
            </li>
            <li>
              <Link to='/'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
