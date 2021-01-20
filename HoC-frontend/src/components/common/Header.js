import { Link ,withRouter} from 'react-router-dom';
import styled from 'styled-components';
import { Auth } from '../../contexts/store';
import Button from './Button';
import Responsive from './Responsive';
import React,{useContext} from 'react'
import { LOGOUT_SUCCESS } from '../../contexts/auth';
import axios from 'axios';

const HeaderBlock = styled.div`
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 8px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;
const Header = () => {
  const {AuthState} = useContext(Auth)

  return (
    <HeaderBlock>
      <Wrapper>
        <div className="logo">심봉사</div>
        <div className="right">
          <UserInfo>{AuthState.login && AuthState.login.username}</UserInfo>
          {AuthState.login.username ? (
            <Button as="a" href="/">로그아웃</Button>
          ) : (
            <Button as="a" href="/login">
              로그인
            </Button>
          )}
        </div>
      </Wrapper>
      <Spacer />
    </HeaderBlock>
  );
};

export default withRouter(Header);
