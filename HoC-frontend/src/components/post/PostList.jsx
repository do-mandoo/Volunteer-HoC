import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import StyledContainer from '../common/Container';
import Header from '../common/Header';

const PostList = ({AuthState, PostState}) => {
  return (
      <div>
      <Header AuthState={AuthState} />
      <Button>버튼</Button>
      {AuthState.company.username && (<Link to="/write" >글쓰기</Link>)}
      {AuthState.company.username && (<Link to="/mypage" >내가 쓴 글</Link>)}
      <StyledContainer>
        {/* <ul>
          {PostState.posts.map(post => (
            <Link to="" ><li>{post.title} {post.companyName}</li></Link>
          ))}
        </ul> */}
      </StyledContainer>
    </div>
  );
};

export default PostList;