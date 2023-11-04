import '../styles/SignIn.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import SignInRequest from '../auth/SignInRequest';
// import { useNavigate } from 'react-router-dom';

import { TextField, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const SignIn = () => {
  const { SignInRequest } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    SignInRequest(formData);
  };
  return (
    <div className='content-container'>
      <div className='signin-container'>
        <div
          className='signin signin_wrapper'>

          <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <TextField
              onChange={onChangeHandler}
              name='email'
              type='text'
              placeholder='Email'
              value={formData.email}
              className='textField'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              onChange={onChangeHandler}
              placeholder='Password'
              type='password'
              name='password'
              value={formData.password}
              className='textField'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <input type='submit' value='Submit' className='signin-btn' />
          </form>
          <h3 className='signin-footer'>
            Not a member?{' '}
            <span className='signup'>
              <Link to='/signup'>Signup Now</Link>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
