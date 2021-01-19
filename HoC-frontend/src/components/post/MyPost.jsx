import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import StyledContainer from '../common/Container';

const MyPostBlock = styled.div`
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
  width:40%;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  overflow:hidden;
  text-align:left;
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
li span.recruitTitle{
  text-align:center
}
`

const MyPost = ({ AuthState, ListState, tokenId }) => {
  console.log(ListState);
  const filterlist = ListState.lists.filter(list => list.user._id === tokenId);
  return (
    <>
      <Header AuthState={AuthState} />
      <StyledContainer>
        <MyPostBlock>
          <h1>내가 작성한 모집 공고</h1>
        <ul>
            <li>
              <span className="recruitTitle">제목</span>
              <span className="recruitNumber">인원수</span>
              <span className="recruitPeriod">기간</span>
              <span className="recruitGender">성별</span>
            </li>
            {filterlist.map(mylist=>(
              <li key={mylist._id}>
                <span>{mylist.title}</span>
                <span>{mylist.number}</span>
                <span>{mylist.periodStart}~{mylist.periodEnd}</span>
                <span>{mylist.gender}</span>
              </li>
            ))}
        </ul>
        </MyPostBlock>
      </StyledContainer>
    </>
  );
};

export default MyPost;