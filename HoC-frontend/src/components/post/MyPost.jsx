import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import { Link, withRouter } from 'react-router-dom';
import AskRemoveModal from './AskRemoveModal';

const GlobalList = styled.div`
  h1{
    text-align:center;
    font-size:2rem;
  }
  button{
    margin-right:30px;
    background-color:yellow;
    color:black;

  }
  ul{
    margin-top:100px;
  }
  li{
    border-bottom:1px solid black;
    padding:10px 0;
    text-align:center;
  }
  span{
    display:inline-block;
    padding:0 5px
  }

  .ListCheckbox, li input[type='checkbox']{
    width:10%;
  }
  .ListDate{
    width:10%;
  }
  .link span:nth-child(1){
    width:10%
  }
  .ListTitle{
    width:40%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
  }
  .link span:nth-child(2){
    width:40%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    text-align:left;
    margin-left : 20px;
  }
  .ListPeriod, .link span:nth-child(3){
    width:20%;
  }
  .ListRemove{
    width:10%;
  }
  li button{
    position: relative;
    right: -15px;
  }
  li span.ListTitle{
    text-align:center
  }
`;

const MyPost = ({ AuthState, ListState, ListName, onChecking, tokenID, modal, onConfirm, onCancel, onRemoveClick }) => {
  return (
    <div>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <GlobalList>
          <h1>{AuthState.login.username}(이/가)작성한 공고</h1>
          <ul>
            <li>
              <span className="ListCheckbox">체크박스</span>
              <span className="ListDate">작성날짜</span>
              <span className="ListTitle">제목</span>
              <span className="ListPeriod">모집기간</span>
              <span className="ListRemove">삭제</span>
            </li>
            {ListName.map(list=>(
              <li key = {list._id} id={list._id}>
                <input type="checkbox" onClick={onChecking}></input>
                <Link to ={`/${list._id}`} className="link">
                  <span>{list.publishedDate.slice(0,10)}</span>
                  <span >{list.title}</span>
                  <span>{list.periodStart}~{list.periodEnd}</span>
                </Link>
                <Button onClick={onRemoveClick}>선택삭제</Button>
                <AskRemoveModal 
                  visible ={modal}
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  />
              </li>
            ))}
            {console.log(ListState.lists[0].publishedDate.length)}
            {console.log('LOCAL', tokenID)}
            {console.log('LISTSTATE',ListState.lists.filter(list=>list.user._id === tokenID))}
          </ul>
          {/* <Button onClick={onClickAll}>전체선택</Button> */}
        </GlobalList>
      </StyledContainer>
    </div>
  );
};

export default withRouter(MyPost);