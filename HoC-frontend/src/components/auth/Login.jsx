import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";

// 회원가입 로그인 폼을 보여주는 컴포넌트

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]}
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;


const Login = ({ onChange, onSubmit, form, error }) => {
  return (
    <AuthFormBlock>
      <h3>로그인</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          authoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {error === 401 && <ErrorMessage>등록된 아이디와 비밀번호가 아닙니다.</ErrorMessage>}
        {error === 400 && <ErrorMessage>빈 칸을 모두 입력해주세요</ErrorMessage>}
        <ButtonWithMarginTop green fullWidth>로그인</ButtonWithMarginTop>
      </form>
      <Footer>
          <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default Login;