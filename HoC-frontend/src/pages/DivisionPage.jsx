import React from 'react';
import { Link } from 'react-router-dom';
import qs from 'query-string';
import Button from '../components/common/Button';

const Division = () => {
  const url = window.location.href;
  const parse = url.split('/');

  return (
    <>
      <Button as={Link} to={`/${parse[parse.length - 1]}/company`}>
        기업으로 {parse[parse.length - 1] === 'login' ? '로그인' : '회원가입'}
    </Button>
    
      <Button as={Link} to={`/${parse[parse.length - 1]}/person`}>
    개인으로 {parse[parse.length - 1] === 'login' ? '로그인' : '회원가입'}
    </Button>
    </>
  );
};

export default Division;
