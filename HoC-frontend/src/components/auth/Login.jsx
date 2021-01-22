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

export const AuthFormBlock = styled.div`
  position:relative;
  // h3 {
  //   margin: 0;
  //   color: ${palette.gray[8]};
  //   margin-bottom: 1rem;
  // }
  .a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip-path: polygon(0 0, 0 0, 0 0);
    clip: rect(0 0 0 0);
    clip: rect(0, 0, 0, 0);
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border-radius: 0px;
  border : 1px solid ${palette.gray[7]};
  padding: 0.5rem;
  outline: none;
  width: 100%;
  
  &::placeholder{
    font-weight: 300 ;
    color:${palette.gray[6]};
  }

  &:focus {
    color: $oc-teal-7;
    outline:2px solid ${palette.gray[5]};
    border : 1px solid ${palette.gray[7]};
    outline : none;
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
  border-radius: 0px;
`;


const Login = ({ onChange, onSubmit, form, error }) => {
  return (
    <AuthFormBlock>
      <h3 className="a11y">로그인</h3>
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
          <Link to="/register">회원가입</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default Login;