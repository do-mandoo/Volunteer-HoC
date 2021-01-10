import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {
  CHANGE_FIELD,
  INITAILIZE_FORM,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import Login from '../../components/auth/Login';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ history }) => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState);

  // 비동기 작업
  const login = async () => {
    console.log(AuthState.login);
    try {
      const response = await axios({
        method: 'POST',
        url: 'api/auth/login',
        data: {
          username: AuthState.login.username,
          password: AuthState.login.password,
        },
      });
      await AuthDispatch({
        type: LOGIN_SUCCESS,
        auth: response,
      });
      await console.log('로그인 성공');
      await history.push('/');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: LOGIN_FAIL,
        authError: error,
      });
    }
  };

  const onChange = e => {
    const { value, name } = e.target;
    AuthDispatch({
      type: CHANGE_FIELD,
      form: 'login',
      key: name,
      value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    login();
  };

  useEffect(() => {
    AuthDispatch({
      type: INITAILIZE_FORM,
      form: 'login',
    });
  }, [AuthDispatch]);

  return <Login form="login" onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(LoginForm);
