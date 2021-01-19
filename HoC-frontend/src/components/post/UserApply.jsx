import React from 'react';
import Header from '../base/Header';
import Button from '../common/Button';
import StyledContainer from '../common/Container';

const UserApply = ({ AuthState, post }) => {
  console.log('post', post);
  console.log(AuthState);
  return (
    <>
    <Header AuthState={AuthState} />
    <StyledContainer>
    <div>
        <h1 className="a11y">모집 공고 등록 페이지</h1>
        <div >
            <h2 className="a11y" htmlFor="post-title">제목: {post.title}</h2>
            <p>
              내용 : 
              {post.body}
            </p>
        </div>
          {localStorage.getItem('token') && AuthState.company.username === post.user._id && (<><Button>수정</Button> <Button>삭제</Button></>) }
    </div>
    </StyledContainer>
    </>
  );
};

export default UserApply;