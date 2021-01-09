import React from 'react';
import { Link } from 'react-router-dom';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

const Division = () => {
  return (
    <>
    <Link to="/register?position=company">
      기업으로 회원가입
    </Link>
    
    <Link to="/register?position=person">
    개인으로 회원가입
    </Link>
    </>
  );
};

export default Division;
