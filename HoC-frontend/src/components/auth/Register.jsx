import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";

// 로그인 폼을 보여주는 컴포넌트

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

export const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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

const Register = ({ position, onChange, onSubmit, form, error }) => {
  return (
    <AuthFormBlock>
      {position === 'company' ?
        (<h3>기업 회원가입</h3>)
        : (<h3>개인 회원가입</h3>)}
      <form onSubmit={onSubmit}>
        <label style={{fontWeight: 700, paddingBottom: '3px'}} htmlFor="username">아이디</label>
        <StyledInput
          autoComplete="username"
          id="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />

<label style={{fontWeight: 700}} htmlFor="username">비밀번호</label>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
<label style={{fontWeight: 700}} htmlFor="username">비밀번호 확인</label>
        <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"  
            onChange={onChange}
            value={form.passwordConfirm}
        />

      {position === 'company' && (
          <>
            <label style={{fontWeight: 700}} htmlFor="username">기관명</label>
          <StyledInput
            autoComplete="company-name"
            name="companyName"
            placeholder="기관명"
            type="text"  
            onChange={onChange}
            value={form.companyName}
          />
        </>
        )}

        <label style={{fontWeight: 700}} htmlFor="username">주소</label>
          <StyledInput
            autoComplete="address"
            name="address"
            placeholder="주소"
            type="address"  
            onChange={onChange}
            value={form.address}
        />
        <label style={{fontWeight: 700}} htmlFor="username">전화번호</label>
        <StyledInput
            autoComplete="phone-number"
            name="phoneNumber"
            placeholder="전화번호"
            type="tel"  
            onChange={onChange}
            value={form.phoneNumber}
        />
        {error === 409 && <ErrorMessage>이미 존재하는 아이디입니다.</ErrorMessage>}
        {error === 400 && <ErrorMessage>회원 가입 양식을 지켜주세요.</ErrorMessage>}
        <ButtonWithMarginTop green fullWidth>회원가입</ButtonWithMarginTop>
      </form>
      <Footer>
          <Link to="/login">로그인</Link>
      </Footer>
    </AuthFormBlock>
  );
};

export default Register;

