import '../styles/ContactUs.css';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';

import React, { useRef, useState } from 'react';
import ContactUsRequest from '../functions/ContactUsRequest';
// import { showAlert } from '../components/Alerts';

function ContactUs() {
  const [userData, setUserData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);


  const onChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onFileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    ContactUsRequest(userData, file);
    // Reset the state of input fields
    setUserData({
      fullname: '',
      email: '',
      phonenumber: '',
      message: '',
    });
    setFile(null);
    fileInputRef.current.value = null;
  };

  return (
    <div className='content-container'>
      <div className='contact-container'>
      {/* <div className='home-header'>
        <h1>Contact Us Today!</h1>
        <p></p>
      </div> */}
        <div className='contact_us-wrapper'>
          <div className='left-box'>
            <div className='margin-box'>
              <div className='form-wrapper'>
                <div className='left-header mb-60'>
                  <h3>Questions or Comments?</h3>
                  <p className='mb-4'>
                    If you have any questions, comments, or need help, please
                    fill out the form below.
                  </p>
                </div>

                <form onSubmit={submitHandler} className='contact-form'>
                  <div className='form-inputs-box'>
                    <div className='form-input'>
                      <input
                        name='fullname'
                        type='text'
                        className='input-field'
                        placeholder='Full Name'
                        onChange={onChangeHandler}
                        value={userData.fullname}
                      />
                    </div>
                    <div className='form-input'>
                      <input
                        name='email'
                        type='email'
                        className='input-field'
                        placeholder='Email'
                        onChange={onChangeHandler}
                        value={userData.email}
                      />
                    </div>
                    <div className='form-input'>
                      <input
                        name='phonenumber'
                        type='text'
                        className='input-field'
                        placeholder='Phone Number'
                        onChange={onChangeHandler}
                        value={userData.phonenumber}
                      />
                    </div>
                    <div className='form-input mb-60'>
                      <textarea
                        name='message'
                        className='input-field message-box'
                        placeholder='Message'
                        onChange={onChangeHandler}
                        value={userData.message}
                      ></textarea>
                    </div>
                    <div className='form-input mb-60'>
                      <input
                        type='file'
                        className='file-btn input-field'
                        placeholder=''
                        onChange={onFileChangeHandler}
                        ref={fileInputRef}
                      />
                    </div>
                    <div className='form-input'>
                      <input
                        type='submit'
                        value='Submit'
                        className='submit-btn'
                      />
                    </div>
                  </div>
                </form>
                <span>
                  By clicking the Submit button above, you authorize
                  <i> DER8.9</i> to contact you via telephone or email
                  provided above. This may include sending you emails about
                  products and services.
                </span>
              </div>
            </div>
          </div>

          <div className='right-box'>
            <div className='info-wrapper'>
              <h3>Contact Us</h3>

              <div className='dbox'>
                <div className='icons'>
                  {/* <span className='fa fa-map-marker'></span> */}
                  <RoomIcon />
                </div>
                <div className='text'>
                  <p>
                    <span>Address:</span>{' '}
                    <em>2543 Carter Street, St. Louis, IL 63101 </em>
                  </p>
                </div>
              </div>

              <div className='dbox'>
                <div className='icons'>
                  {/* <span className='fa fa-map-marker'> </span> */}
                  <PhoneIcon />
                </div>
                <div className='text'>
                  <p>
                    <span>Phone:</span> <em>618-784-7864</em>
                  </p>
                </div>
              </div>

              <div className='dbox'>
                <div className='icons'>
                  {/* <span className='fa fa-map-marker'> </span> */}
                  <EmailIcon />
                </div>
                <div className='text'>
                  <p>
                    <span>Email:</span> <em>contact-DER8.9@jgen.inc</em>
                  </p>
                </div>
              </div>

              <div className='dbox'>
                <div className='icons'>
                  {/* <span className='fa fa-map-marker'> </span> */}
                  <PublicIcon />
                </div>
                <div className='text'>
                  <p>
                    <span>Website:</span> <em>www.DER89.inc</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
