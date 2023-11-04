import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { showAlert } from '../components/Alerts';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGNUP_SUCCESS,
} from './authActionTypes';

export const AuthContext = createContext();

const INITIAL_STATE = {
  userAuth: JSON.parse(localStorage.getItem('userAuth')),
  error: null,
  loading: false,
  profile: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('userAuth', JSON.stringify(payload));
      return {
        ...state,
        loading: false,
        profile: null,
        error: null,
        userAuth: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        profile: null,
        error: null,
        userAuth: payload,
      };
    case SIGNUP_SUCCESS:
      localStorage.setItem('userAuth', JSON.stringify(payload));
      return {
        ...state,
        error: null,
        loading: false,
        profile: null,
        userAuth: payload,
      };
    case LOGOUT:
      localStorage.removeItem('userAuth');
      return {
        ...state,
        loading: false,
        profile: null,
        error: null,
        userAuth: null,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  //login action
  const SignInRequest = (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // "Authorization":
      },
    };
    axios
      .post('/api/users/login', formData, config)
      .then((res) => {
        const user = res.data.data;
        if (res?.data?.status === 'success') {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: res.data.data,
          });
          showAlert('success', `'Logged in successfully as ${user.fullname}'`);
          (() =>
            setTimeout(() => {
              if (user.role === 'admin') {
                window.location.href = `/admin`;
              } else {
                window.location.href = '/'
              }
            }, 1000))();
          //redirect
          // window.location.href = '/'
        }
      })
      .catch((err) => {
        showAlert('error', 'Login failed');
        dispatch({
          type: 'LOGIN_FAILED',
          // payload: err?.response?.data?.message
        });
      });
  };

  const SignUpRequest = (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // "Authorization":
      },
    };
    axios
      .post('/api/users/signup', formData, config)
      .then((res) => {
        const role = res.data.data.user.role;
        if (res?.data?.status === 'success') {
          dispatch({
            type: 'SIGNUP_SUCCESS',
            payload: res.data.data,
          });
          showAlert('success', 'Account created successfully');
          (() =>
            setTimeout(() => {
              window.location.href = `/log-in`; //redirecting to sign in due to userauth stored incorrectly
              // window.location.href = `/${role}`;
            }, 1000))();
          //redirect
          // window.location.href = '/'
        }
      })
      .catch((err) => {
        showAlert('error', err.response.data.message);
        dispatch({
          type: 'LOGIN_FAILED',
          // payload: err?.response?.data?.message
        });
      });
  };

  const logoutUserAction = () => {
    dispatch({
      type: LOGOUT,
      payload: null,
    });
    window.location.href = '/log-in';
  };

  return (
    <AuthContext.Provider
      value={{
        SignInRequest,
        SignUpRequest,
        userAuth: state?.userAuth,
        token: state?.userAuth?.token,
        role: state?.userAuth?.role,
        logoutUserAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
