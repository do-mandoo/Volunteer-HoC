import React, { useContext, useEffect, useState } from 'react';
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


const RegisterForm = ({ history }) => {
  const url = window.location.pathname;
  const parse = url.split('/');
  const { AuthState, AuthDispatch } = useContext(Auth); //app.js에서 프로바이더로 내려준걸 디스트럭처링할당한거다.
  const [error, setError] = useState(null);
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
      await AuthDispatch({
        type: REGISTER_SUCCESS,
        auth: response,
      });
      await history.push('/');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: REGISTER_FAIL,
        error: error.response,
      });
      await setError(error.response.status);
    }
  };

  const personRegister = async () => {
    console.log(AuthState.person);
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
      console.log(response);
      await AuthDispatch({ // 디스패치날리면 리듀서로 날라감.
        type: REGISTER_SUCCESS,
        auth: response,
      });

      await history.push('/');
    } catch (error) {
      console.log(error);
      await AuthDispatch({
        type: REGISTER_FAIL,
        error: error.response,
      });
      await setError(error.response.status);
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
  const onSubmit = async e => {
    e.preventDefault();

    if (parse[parse.length - 1] === 'company') companyRegister();
    if (parse[parse.length - 1] === 'person') personRegister();
  };

  useEffect(() => {
    AuthDispatch({
      type: INITAILIZE_FORM,
      form: parse[parse.length - 1],
    });
  }, [AuthDispatch]);

  return (
    <Register
      position={parse[parse.length - 1]}
      form={parse[parse.length - 1]}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
