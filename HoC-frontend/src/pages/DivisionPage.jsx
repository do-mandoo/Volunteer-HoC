import React from 'react';
import { Link } from 'react-router-dom';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import qs from 'query-string';

const Division = () => {
  return (
    <>
    <Link to="/register/company">
      기업으로 회원가입
    </Link>
    <br />
    <Link to="/register/person">
    개인으로 회원가입
    </Link>
    </>
  );
};

export default Division;
