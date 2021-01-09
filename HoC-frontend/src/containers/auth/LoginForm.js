import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CHANGE_FIELD, INITAILIZE_FORM } from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import Login from '../../components/auth/Login';

const LoginForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState);

  // 비동기 작업
  const login = async () => {
    console.log(AuthState.login);
    try {
      await axios({
        method: 'POST',
        url: 'api/auth/login',
        data: {
          username: AuthState.login.username,
          password: AuthState.login.password,
        },
      });
    } catch (e) {
      console.log(e);
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

export default LoginForm;
