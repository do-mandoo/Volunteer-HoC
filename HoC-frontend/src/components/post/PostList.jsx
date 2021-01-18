import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import StyledContainer from '../common/Container';
import Header from '../common/Header';

const PostList = ({AuthState, ListState}) => {
  return (
    <div>
      <Header />
      <Button>버튼</Button>
      {/* {AuthState.company.username && (<Link to="/write" >글쓰기</Link>)} */}
      {/* {AuthState.company.username && (<Link to="/mypage" >내가 쓴 글</Link>)} */}
      <StyledContainer>
        <ul>
          {ListState.lists.map(list => (<li>제목: {list.title} /성별:{list.gender} /기간:{list.period} /회사이름:{list.companyName}</li>))}
        </ul>
        <Link to="/page">기관인 내가 쓴 목록으로 이동</Link>
        
      </StyledContainer>
    </div>
  );
};

export default PostList;