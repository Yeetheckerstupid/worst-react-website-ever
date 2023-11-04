import '../styles/AuthRoute.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import unauthorized from '../assets/img/error_401.jpg';

const AuthRoute = ({ children } = {}) => {
  const { userAuth } = useContext(AuthContext);

  if (userAuth?.role === 'admin') {
    return <>{children}</>;
  }

  return (
    <div className='content-container authroute'>
      <div className='unauth-txt'>
        <span>You must be an Admin to view this page! </span>
      </div>
      <div className='unauth-img'>
        <img src={unauthorized} alt='unathorized-img' />
      </div>
    </div>
  );
};

export default AuthRoute;
