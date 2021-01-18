import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const PostListBlock = styled.div`
  h1{
    text-align:center;
    font-size:2rem;

  }
  button{
    margin-right:30px
  }
  ul{
    margin-top:100px;
  }
  li{
    border-bottom:1px solid black;
    padding:10px 0;
    text-align:center
  }
  li:first-child{
  }
  span{
    display:inline-block;
    padding:0 5px
  }
  li span:nth-child(1){
    width:50%;
  }
  li span:nth-child(2){
    width:10%;
  }
  li span:nth-child(3){
    width:30%;
  }
  li span:nth-child(4){
    width:10%;
  }
  `;
function PostList({ AuthState, ListState }) {
  return (
    <div>
      <Header />
      <StyledContainer>
        <PostListBlock>
          <h1>봉사자 모집 공고</h1>
          {AuthState.company.username && <Button><Link to="/write" >글쓰기</Link></Button>}
          {AuthState.company.username && <Button><Link to="/mypage" >내가쓴글</Link></Button>}
          <ul>
            <li>
              <span className="recruitTitle">제목</span>
              <span className="recruitNumber">인원수</span>
              <span className="recruitPeriod">기간</span>
              <span className="recruitGender">성별</span>
            </li>
            {ListState.lists.map(list => (
              <li key={list.user.id}>
                <span>{list.title}</span>
                <span>{list.number}</span>
                <span>{list.period}</span>
                <span>{list.gender}</span>
              </li>
            )
            )}
          </ul>
        </PostListBlock>
      </StyledContainer>
    </div>
  )
}

export default PostList;