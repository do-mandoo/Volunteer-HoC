import React from 'react';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from "../common/Button";
import OutlinedButtons from '../common/DivisionBtn';
import Header from '../common/Header';
import FormPropsTextFields from '../common/Input';
import InputPage from '../common/Input';
import Modal from '../common/Modal';
import Responsive from '../common/Responsive';
import AskAddressModal from '../post/AskAddressModal';

// 로그인 폼을 보여주는 컴포넌트
const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  background:#03c75a;
  box-shadow: 8px 2px 4px rgba(0, 0, 0, 0.08);
  `;
  
  const Wrapper = styled(Responsive)`
  @font-face {
    font-family: 'BinggraeSamanco-Bold';
    src: url('https://github.com/projectnoonnu/noonfonts_20-10/blob/main/BinggraeSamanco-Bold.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    letter-spacing: 2px;
    color:#fff;
    line-height:80px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .headerButton{
    padding:7px 25px;
    border:none;
    outline:none;
    background:transparent;
    border:3px solid #fff;
    color:#fff;
    border-radius:20px;
    font-weight:700;
    :hover{
      background:#fff;
      color:#03c75a;
      border:3px solid #fff;
    }
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const StyledHeader = styled.div`

`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthFormBlock = styled.div`
  /* h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  } */
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Abel', sans-serif;
  .left-box {
    border-right: none;
    border-radius: none;
    width: 200px;
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

const Register = ({ position, onChange, onSubmit, form, error, modalOpen, openModal, closeModal }) => {

  return (
    <>
     <HeaderBlock>
      <Wrapper>
        <div className="logo">심봉사</div>
        <div className="right">
            <Button className="headerButton" as="a" href="/login">
              로그인
            </Button>
        </div>
      </Wrapper>
      <Spacer />
    </HeaderBlock>
      <AuthFormBlock>
        {/* <OutlinedButtons clㄴassName="left-box">기업으로 회원가입</OutlinedButtons> */}
        {/* <OutlinedButtons >개인으로 회원가입</OutlinedButtons> */}
      {position === 'company' ?
        (<h1 style={{marginTop: 20, fontWeight: 700, fontSize: 30}}>Register as a Company</h1>)
        : (<h1 style={{marginTop: 20, fontWeight: 700, fontSize: 30}}>Register as an Individual</h1>)}
      <form onSubmit={onSubmit} style={{marginTop: 20}} >
        {/* <label style={{fontWeight: 700, paddingBottom: '3px'}} htmlFor="username">아이디</label> */}
        {/* <StyledInput
          autoComplete="username"
          id="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        /> */}
          {/* style={{width: 1024, paddingLeft: 130}} */}
          <div >
        <FormPropsTextFields label="아이디" type="text" name="username" placeholder="아이디" onChange={onChange}/>

{/* <label style={{fontWeight: 700}} htmlFor="username">비밀번호</label>
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        /> */}
        <FormPropsTextFields label="비밀번호" type="password" name="password" placeholder="비밀번호" onChange={onChange}/>
{/* <label style={{fontWeight: 700}} htmlFor="username">비밀번호 확인</label>
        <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"  
            onChange={onChange}
            value={form.passwordConfirm}
        /> */}
        <FormPropsTextFields label="비밀번호 확인" type="password" name="passwordConfirm" placeholder="비밀번호 확인" onChange={onChange}/>

{/* <label style={{fontWeight: 700}} htmlFor="username">이메일</label>
        <StyledInput
            autoComplete="email"
            name="email"
            placeholder="이메일 주소"
            type="text"  
            onChange={onChange}
        /> */}
        <FormPropsTextFields label="이메일" type="text" name="email" placeholder="이메일 주소" onChange={onChange}/>

      {position === 'company' && (
          <>
            {/* <label style={{fontWeight: 700}} htmlFor="username">기관명</label>
          <StyledInput
            autoComplete="company-name"
            name="companyName"
            placeholder="기관명"
            type="text"  
            onChange={onChange}
            value={form.companyName}
          /> */}
        <FormPropsTextFields label="기관명" type="text" name="companyName" placeholder="기관명" onChange={onChange}/>
            
        </>
        )}

        {/* <label style={{ fontWeight: 700 }} htmlFor="username">주소</label>
        <InputPage />
          <StyledInput
            autoComplete="address"
            name="address"
            placeholder="주소"
            type="address"  
            onChange={onChange}
            value={form.address}
        /> */}
        <FormPropsTextFields label="주소" type="text" name="address" placeholder="주소" onChange={onChange}/>


        {/* <Button onClick={onAddress}>주소 찾기</Button>
        <AskAddressModal 
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel} 
          /> */}
        
        {/* <label style={{fontWeight: 700}} htmlFor="username">전화번호</label>
        <StyledInput
            autoComplete="phone-number"
            name="phoneNumber"
            placeholder="전화번호"
            type="tel"  
            onChange={onChange}
            value={form.phoneNumber}
        /> */}
            <FormPropsTextFields label="휴대폰 번호" type="text" name="phoneNumber" placeholder="휴대폰 번호" onChange={onChange}/>
            </div>

        {error === 409 && <ErrorMessage>이미 존재하는 아이디입니다.</ErrorMessage>}
        {error === 400 && <ErrorMessage>회원 가입 양식을 지켜주세요.</ErrorMessage>}
        <ButtonWithMarginTop style={{width: 460, paddingLeft: '10'}} green fullWidth>회원가입</ButtonWithMarginTop>
      </form>
      <Footer>
          <Link to="/login">로그인</Link>
      </Footer>
      </AuthFormBlock>
      <Modal open={modalOpen} close={closeModal} header="지원하기">
              회원가입을 축하드립니다!
      </Modal>
      </>
  );
};

export default Register;

