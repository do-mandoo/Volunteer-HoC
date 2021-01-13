import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import StyledContainer from '../components/common/Container';
import Header from '../components/common/Header';

const PostListPage = () => {
  return (
    <div>
      <Header />
        <Button>버튼</Button>
        <Link to="/write" >글쓰기</Link>
      <StyledContainer>
      </StyledContainer>
    </div>
  );
};

export default PostListPage;
