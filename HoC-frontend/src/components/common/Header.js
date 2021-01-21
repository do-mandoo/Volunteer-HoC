import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CHANGE_FIELD, CHECK_LOGIN } from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import { login } from '../../lib/api/auth';
import Button from './Button';
import StyledContainer from './Container';
import Responsive from './Responsive';

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
  const { AuthState, AuthDispatch } = useContext(Auth);
  useEffect(() => {
    (async () => {
      try {
        const response =
          (await axios.get('/api/auth/check/company')) ||
          (await axios.get('/api/auth/check/person'));
        await AuthDispatch({
          type: CHECK_LOGIN,
          id: response.data._id,
          username: response.data.username,
          position: response.data.position,
          email: response.data.email,
        });
      } catch (e) {
        // console.log(e);
      }
    })();
  }, [AuthDispatch]);

  const onClick = async () => {
    localStorage.removeItem('token');
    try {
      await axios.post('http://localhost:3000/api/auth/logout/person');
      await axios.post('http://localhost:3000/api/auth/logout/company');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <HeaderBlock>
      <Wrapper>
        <div className="logo">심봉사</div>
        <div className="right">
          <UserInfo>{AuthState.login && AuthState.login.username}</UserInfo>
          {AuthState.login.username ? (
            <Button onClick={onClick} as="a" href="/">
              로그아웃
            </Button>
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

export default Header;
