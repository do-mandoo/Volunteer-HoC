import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { CHANGE_FIELD, INITAILIZE_FORM } from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import Register from '../../components/auth/Register';

const RegisterForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const url = window.location.href;
  const parse = url.split('/');

  // 비동기
  const register = async () => {
    console.log(AuthState.register);
    try {
      const response = await axios.post('api/auth/register/company', {
        username: AuthState.register.username,
        password: AuthState.register.password,
        passwordConfirm: AuthState.register.passwordConfirm,
        position: parse[parse.length - 1],
        companyName: AuthState.register.companyName,
        address: AuthState.register.address,
        phoneNumber: AuthState.register.phoneNumber,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    const { value, name } = e.target;
    AuthDispatch({
      type: CHANGE_FIELD,
      form: 'register',
      key: name,
      value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    register();
  };

  useEffect(() => {
    AuthDispatch({
      type: INITAILIZE_FORM,
      form: 'register',
    });
  }, [AuthDispatch]);

  return (
    <Register
      position={parse[parse.length - 1]}
      form="register"
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
