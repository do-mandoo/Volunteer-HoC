import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  CHANGE_FIELD,
  CHECK_LOGIN,
  INITAILIZE_FORM,
} from '../../contexts/auth';
import { Auth } from '../../contexts/store';
import { login } from '../../lib/api/auth';
import Button from './Button';
import StyledContainer from './Container';
import Responsive from './Responsive';
import logo1 from '../images/logo1.png'
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
    width:70px;
    height:80px;
    background:url(${logo1}) no-repeat;
    background-size:contain;
    background-position:center;
    color:transparent;
    line-height:80px;
    .a11y {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      margin: -1px;
      clip-path: polygon(0 0, 0 0, 0 0);
      clip: rect(0 0 0 0);
      clip: rect(0, 0, 0, 0);
    }
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
    AuthDispatch({
      type: INITAILIZE_FORM,
    });
  };

  return (
    <HeaderBlock>
      <Wrapper>
        <Link to="/"><div className="logo a11y">심봉사</div></Link>
        <div className="right">
          <UserInfo>{AuthState.login && AuthState.login.username}</UserInfo>
          {AuthState.login.username ? (
            <Button className="headerButton" onClick={onClick} as="a" href="/">
              로그아웃
            </Button>
          ) : (
            <Button className="headerButton" as="a" href="/login">
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