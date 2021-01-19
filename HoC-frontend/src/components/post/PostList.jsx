import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom';

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
  span{
    display:inline-block;
    padding:0 5px
  }
  li span:nth-child(1){
    width:20%;
  }
  
  li span:nth-child(2){
    width:40%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    text-align:left;
  }
  li span:nth-child(3){
    width:10%;
  }
  li span:nth-child(4){
    width:20%;
  }
  li span:nth-child(5){
    width:10%;
  }
  li span.recruitTitle{
    text-align:center
  }
  `;
function PostList({ AuthState, ListState }) {
  console.log(ListState.lists);
  console.log(AuthState);
  
  return (
    <div>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <PostListBlock>
          <h1>봉사자 모집 공고</h1>
          {AuthState.company && AuthState.company.username && <Button as={Link} to="/write">글쓰기</Button>}
          {AuthState.company && AuthState.company.username && <Button as={Link} to="/mypage">내가쓴글</Button>}
          <ul>
            <li>
              <span className="recruitTitle">회사이름</span>
              <span className="recruitTitle">제목</span>
              <span className="recruitNumber">인원수</span>
              <span className="recruitPeriod">기간</span>
              <span className="recruitGender">성별</span>
            </li>
            {ListState.lists.map(list => (
              <li key={list._id}>
                <Link to={`${AuthState.login.username && '/@' + AuthState.login.username}/${list._id}`}>
                  <span>{list.companyName}</span>
                  <span>{list.title}</span>
                  <span>{list.number}</span>
                  <span>{list.periodStart}~{list.periodEnd}</span>
                  <span>{list.gender}</span>
                </Link>
              </li>
            )
            )}
          </ul>
        </PostListBlock>
      </StyledContainer>
    </div>
  )
}

export default withRouter(PostList);