import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import StyledContainer from '../components/common/Container';
import Header from '../components/common/Header';
import { Auth } from '../contexts/store';

const PostListPage = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState);
  return (
    <div>
      <Header />
      <Button>버튼</Button>
      {AuthState.company.username && (<Link to="/write" >글쓰기</Link>)}
      {AuthState.company.username && (<Link to="/mypage" >내가 쓴 글</Link>)}
      <StyledContainer>
      </StyledContainer>
    </div>
  );
};

export default PostListPage;
