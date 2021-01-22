import React from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom';
import Mainbanner from '../common/Mainbanner';
import { MdAssignment } from "react-icons/md";
const PostListBlock = styled.div`
margin-top:100px;
text-align:center;
  h1{
    text-align:center;
    font-size:2.2rem;
    font-weight:700;
  }
  p{
    width:300px;
    font-size:1.1rem;
    height:100px;
    text-align:center;
    position:relative;
    line-height:100px;
    margin:0 auto;
    color:#03c75a;
  ::before{
    content:'';
    position:absolute;
    top:20px;
    left:50%;
    transform:translateX(-50%);
    width:25px;
    height:2px;
    background:#03c75a;
  }
  }
  
  button{
    margin-right:30px
  }
  ul{
    margin-top:100px;
  }
  li{
    border-bottom:1px solid #ddd;
    padding:15px 0;
    color:#333;
    text-align:center;
  :nth-child(1){
    background:#eee;
    border-top:2px solid #ddd;
    border-bottom:none;
    span{
      font-weight:700;
    }
  }
  }
  
  span{
    display:inline-block;
    padding:0 5px
  }
  li span:nth-child(1){
    width:5%;
  }
  li span:nth-child(2){
    width:20%;
  }
  
  li span:nth-child(3){
    width:35%;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    overflow:hidden;
    text-align:left;
  }
  li span:nth-child(4){
    width:7%;
  }
  li span:nth-child(5){
    width:25%;
    color:#03c75a;
  }
  li span:nth-child(6){
    width:8%;
  }
  li span.recruitTitle{
    text-align:center
  }
  .postListIcon{
    text-align:center;
    font-size:2rem;
    padding:20px 0;

  }
  `;
  const PostListHeader = styled.div`
  border-radius:20px; 
  display:inline-block;
  `
function PostList({ AuthState, ListState }) {
  
  return (
    <div>
      <Header AuthState={AuthState} />
        <Mainbanner AuthState={AuthState}/>
      <StyledContainer >
        <PostListBlock>
          <PostListHeader>
            <div className="postListIcon"><MdAssignment /></div>
            <h1>봉사자 모집 공고</h1>
            <p>봉사 지원자를 모집합니다.</p>
          </PostListHeader>
          <ul>
            <li>
              <span className="listNumber">No</span>
              <span className="recruitTitle">회사이름</span>
              <span className="recruitTitle">제목</span>
              <span className="recruitNumber">인원수</span>
              <span className="recruitPeriod">기간</span>
              <span className="recruitGender">성별</span>
            </li>
            {ListState.lists.map((list,index,thisList) => (
              <li key={list._id}>
                <Link to={`${AuthState.login.username && '/@' + AuthState.login.username}/${list._id}`}>
                  <span>{thisList.length-index}</span>
                  <span>{list.companyName}</span>
                  <span>{list.title}</span>
                  <span>{list.number}</span>
                  <span>{list.periodStart} ~ {list.periodEnd}</span>
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