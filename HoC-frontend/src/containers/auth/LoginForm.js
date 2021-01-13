import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {
  CHANGE_FIELD,
  INITAILIZE_FORM,
  REGISTER_INFO,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import Login from '../../components/auth/Login';
import { withRouter } from 'react-router-dom';
const url = window.location.href;
const parse = url.split('/');

const LoginForm = ({ history }) => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const [error, setError] = useState(null);

  // 비동기 작업
  const login = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: `http://localhost:3000/api/auth/login/${parse[parse.length - 1]}`,
        data: {
          username: AuthState.login.username,
          password: AuthState.login.password,
        },
      });
      await AuthDispatch({
        type: LOGIN_SUCCESS,
        auth: response,
      });
      await AuthDispatch({
        type: REGISTER_INFO,
        form: parse[parse.length - 1],
        username: response.data.username,
        address: response.data.address,
        phoneNumber: response.data.phoneNumber,
        companyName: response.data.companyName,
      });
      await history.push('/');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: LOGIN_FAIL,
        authError: error,
      });
      // (await AuthState.authError) === 401 &&
      //   setError('등록된 아이디와 비밀번호가 아닙니다.');
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
    const { username, password } = AuthState.login;
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력해주세요');
    }
    login();
  };

  useEffect(() => {
    AuthDispatch({
      type: INITAILIZE_FORM,
      form: 'login',
    });
  }, [AuthDispatch]);

  return (
    <Login form="login" onChange={onChange} onSubmit={onSubmit} error={error} />
  );
};

export default withRouter(LoginForm);
