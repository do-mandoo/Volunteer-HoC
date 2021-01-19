import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import StyledContainer from '../common/Container';
import { Link } from 'react-router-dom';

const GlobalList = styled.div`
  h1{
    text-align:center;
    font-size:2rem;

  }
  button{
    margin-right:30px
    background-color:yellow;

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
    width:50%;
  }
  
  li span:nth-child(2){
    width:30%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    text-align:left;
  }
  li span:nth-child(3){
    width:10%;
  }
  li span.ListTitle{
    text-align:center
  }
`;

const MyPost = ({ AuthState, ListState }) => {
  const localID = localStorage.getItem('token');
  return (
    <div>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <GlobalList>
          <h1> {ListState.componyName} 작성한 모집 공고</h1>
          <ul>
            <li>
              <span className="ListTitle">제목</span>
              <span className="ListDetail">자세히 보기</span>
              <span className="ListMore">더보기</span>
            </li>
            {ListState.lists.filter(list=>list.user._id === localID).map(list=>(
              <li key = {list._id}>
                <span>{list.title}</span>
                <span>{list.periodStart}~{list.periodEnd}</span>
                <span><button><Link to='/write'>더보기</Link></button></span>
              </li>
            ))}
            {console.log('LOCAL', localID)}
            {console.log('LISTSTATE',ListState.lists.filter(list=>list.user._id === localID))}
            {console.log(ListState.lists)}
          </ul>
        </GlobalList>
      </StyledContainer>
    </div>
  );
};

export default MyPost;