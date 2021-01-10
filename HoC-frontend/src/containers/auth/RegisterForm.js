import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import {
  CHANGE_FIELD,
  INITAILIZE_FORM,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import Register from '../../components/auth/Register';
import { withRouter } from 'react-router-dom';
const url = window.location.href;
const parse = url.split('/');

const RegisterForm = ({ history }) => {
  const { AuthState, AuthDispatch } = useContext(Auth);

  // 비동기
  const companyRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register/company',
        {
          username: AuthState.company.username,
          password: AuthState.company.password,
          passwordConfirm: AuthState.company.passwordConfirm,
          position: parse[parse.length - 1],
          companyName: AuthState.company.companyName,
          address: AuthState.company.address,
          phoneNumber: AuthState.company.phoneNumber,
        }
      );
      console.log(response);
      await AuthDispatch({
        type: REGISTER_SUCCESS,
        auth: response,
      });
      await console.log('회원가입성공');
      await history.push('/');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: REGISTER_FAIL,
        authError: error,
      });
      await console.log('오류');
    }
  };

  const personRegister = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register/person',
        {
          username: AuthState.person.username,
          password: AuthState.person.password,
          passwordConfirm: AuthState.person.passwordConfirm,
          position: parse[parse.length - 1],
          address: AuthState.person.address,
          phoneNumber: AuthState.person.phoneNumber,
        }
      );
      await AuthDispatch({
        type: REGISTER_SUCCESS,
        auth: response,
      });
      await console.log('회원가입성공');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: REGISTER_FAIL,
        authError: error,
      });
      await console.log('오류');
      await console.log(AuthState);
    }
  };

  const onChange = e => {
    const { value, name } = e.target;
    AuthDispatch({
      type: CHANGE_FIELD,
      form: parse[parse.length - 1],
      key: name,
      value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (parse[parse.length - 1] === 'company') companyRegister();
    if (parse[parse.length - 1] === 'person') personRegister();
  };

  return (
    <Register
      position={parse[parse.length - 1]}
      form={parse[parse.length - 1]}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(RegisterForm);
