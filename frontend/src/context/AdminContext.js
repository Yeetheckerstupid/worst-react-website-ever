import axios from 'axios';
import { createContext, useReducer } from 'react';
import {
  DELETE_CONTACT_REQ_SUCCESS,
  DELETE_USER_SUCCESS,
  FETCH_CONTACT_REQ_FAIL,
  FETCH_CONTACT_REQ_SUCCESS,
  FETCH_USERS_SUCCESS,
  ACTIVE_TAB,
} from './AdminActionTypes';

// create admin context
export const AdminContext = createContext();

//Initial state
const INITIAL_STATE = {
  contactReqData: null,
  error: null,
  registeredUsers: null,
  activeTab: 'dashboard',
};

//Admin reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_CONTACT_REQ_SUCCESS:
      return {
        ...state,
        contactReqData: payload,
        error: null,
        registeredUsers: null,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        contactReqData: null,
        error: null,
        registeredUsers: payload,
      };

    case ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      };

    default:
      return state;
  }
};

const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const authtoken = JSON.parse(localStorage.getItem('userAuth'));

  const setActiveTab = (tab) => {
    dispatch({
      type: ACTIVE_TAB,
      payload: tab,
    });
  };

  const fetchContactRequests = () => {
    axios
      .get('/api/admin/contact-requests', {
        headers: {
          Authorization: `Bearer ${authtoken.token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: 'FETCH_CONTACT_REQ_SUCCESS',
          payload: res.data.requests,
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_CONTACT_REQ_FAIL,
          // payload: error.message
        });
      });
  };

  const fetchUsers = () => {
    axios
      .get('/api/admin/getusers', {
        headers: {
          Authorization: `Bearer ${authtoken.token}`,
        },
      })
      .then((res) => {
        dispatch({
          type: 'FETCH_USERS_SUCCESS',
          payload: res.data.allusers,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AdminContext.Provider
      value={{
        fetchContactRequests,
        fetchUsers,
        setActiveTab,
        contactReqData: state?.contactReqData,
        registeredUsers: state?.registeredUsers,
        activeTab: state?.activeTab,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
