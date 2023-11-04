import '../styles/SignIn.css';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

const SignUp = () => {
  const { SignUpRequest } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
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

    SignUpRequest(formData);
  };

  return (
    <div className='content-container'>
      <div className='signin-container'>
        <div className='signup signin_wrapper'>
          <form onSubmit={submitHandler}>
            <h2>Signup Form</h2>
            <TextField
              onChange={onChangeHandler}
              name='name'
              type='text'
              placeholder='Full Name'
              value={formData.fullname}
              className='textField'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IconButton>
                      <PersonIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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

            <input type='submit' value='Sign up' className='signin-btn' />
          </form>
          <h3 className='signin-footer'>
            Already have an account?{' '}
            <span className='signup'>
              <Link to='/log-in'>Login Now</Link>
            </span>
          </h3>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
