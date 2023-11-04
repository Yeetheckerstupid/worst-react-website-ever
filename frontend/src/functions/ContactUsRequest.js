import axios from 'axios';
import { showAlert } from '../components/Alerts';

function ContactUsRequest(contactData, file) {
  // const { fullname, email, phonenumber, message } = contactData;

  axios
    .post('/api/contact-data/', {
      fullname: contactData.fullname,
      email: contactData.email, 
      phonenumber: contactData.phonenumber,
      message: contactData.message,
    })
    .then((res) => {
      if (res.data.status === 'success') {
        sendFile(file, res.data.newContact);
      }
    })
    .catch((err) => {
      console.log(err);
      showAlert('error', `There was an error submiting your request.`);
    });
}

function sendFile(fileData, newContact) {
  const formData = new FormData();
  formData.append('file', fileData);
  formData.append('newContact', JSON.stringify(newContact));

  axios
    .post('/api/contact-data/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      if (res.data.status === 'success') {
        showAlert('success', `${res.data.message}`);
        // showAlert('success', '');
      }
    })
    .catch((err) => {
      console.log(err);
      showAlert('error', `There was an error submiting your file.`);
    });
}

export default ContactUsRequest;
