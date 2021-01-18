import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const Header = ({ AuthState }) => {
  console.log(AuthState);
  return (
    <HeaderBlock>
      <Wrapper>
        <div className="logo">심봉사</div>
        <div className="right">
          <UserInfo>{AuthState.login.username}</UserInfo>
          {AuthState.login.username ? (
            <Button to="/login">로그아웃</Button>
          ) : (
            <Button to="/login">로그인</Button>
          )}
        </div>
      </Wrapper>
      <Spacer />
    </HeaderBlock>
  );
};

export default Header;
