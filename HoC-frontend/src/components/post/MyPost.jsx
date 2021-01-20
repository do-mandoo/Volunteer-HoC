import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import StyledContainer from '../common/Container';
import { Link, withRouter } from 'react-router-dom';

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

const MyPost = ({ AuthState, ListState, tokenID,ListCompanyName }) => {
  return (
    <div>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <GlobalList>
          <h1>{ListCompanyName.companyName}(이/가)작성한 공고</h1>
          <ul>
            <li>
              <span className="ListTitle">제목</span>
              <span className="ListDetail">자세히 보기</span>
              <span className="ListMore">더보기</span>
            </li>
            {ListState.lists.filter(list=>list.user._id === tokenID).map(list=>(
              <li key = {list._id}>
                <span>{list.title}</span>
                <span>{list.periodStart}~{list.periodEnd}</span>
                <span><button><Link to={`${AuthState.login.username && '/@'+AuthState.login.username}/${list._id}`}>더보기</Link></button></span>
              </li>
            ))}
            {console.log('LOCAL', tokenID)}
            {console.log('LISTSTATE',ListState.lists.filter(list=>list.user._id === tokenID))}
            {console.log(ListState.lists)}
          </ul>
        </GlobalList>
      </StyledContainer>
    </div>
  );
};

export default withRouter(MyPost);