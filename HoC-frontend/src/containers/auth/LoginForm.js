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

const LoginForm = ({history}) => {
  // 액션도 받아와야하고
  // 그리고 디스패치도 날려주어야 한다.
  // 여기서 모든일이 이루어진다.
  
  // 1. consumer => 사용법이 불편
  // 2. this.contextType => class
  // 3. useContext => hook
  const{AuthState, AuthDispatch} = useContext(Auth);  //get

  // useContext로 액션(상태)와 디스패치(리듀서)를 받아왔는데
  // 이제 뭐하지?
  //post
  const loginform = async () => {
    console.log(AuthState.login);
    try{
      await axios.post(
        'http://localhost:3000/api/auth/login/company',
        {
            username : AuthState.login.username,
            password : AuthState.login.password,// payload
        }
      );
      await history.push('/');
    } catch (error){
      console.log('에러났다리~');
    }
  }

  // input에 onChange 이벤트가 발생했을때 상태가 변해야 하고
  const onChange = e => {
    const {name, value} = e.target;
    AuthDispatch({
      type: CHANGE_FIELD,
      key: name,
      value: value,
    });
    console.log(AuthState);
  };
  // submit 이벤트가 일어났을때 어떤일을 해야하는지 정의
  const onSubmit = e => {
    e.preventdefault();
    loginform();

  }
  // 이벤트가 발생했을 때 비동기처리

  return <Login AuthState={AuthState} onChange={onChange} onSubmit={onSubmit}/>;
};

export default withRouter(LoginForm);
