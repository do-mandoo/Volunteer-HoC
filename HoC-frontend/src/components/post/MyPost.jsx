import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../../components/common/Button';
import StyledContainer from '../common/Container';
import { Link } from 'react-router-dom';

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
}
li>*{
  text-align:center;
  display:inline-block;
}
span{
  display:inline-block;
}


li .listCheck{
  width:5%;
  text-align:center;
}
li .listRemove{
  width:15%
}

li .listDate{
  width:30%;
}
li .listTitle{
  width:50%;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
  text-align:left;
}
.removeButton{
  width:40px;
  margin:0 auto;
  padding:5px;
  background:transparent;
  outline:none;
  border:none;
  border:1px solid green;
  border-radius:5px;
}
li span.listTitle{
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
                <span className="listCheck">선택</span>
                <span className="listDate">작성 일자</span>
                <span className="listTitle">제목</span>
                <span className="listRemove">선택삭제</span>
              </li>
              {filterlist.map(mylist=>(
                <li key={mylist._id}>
                  <label className="listCheck">
                    <input type="checkbox" class="filled-in "/>
                    {/* <span>Filled in</span> */}
                  </label>
                  <span className="listDate">{
                  String(mylist.publishedDate).substring(0,10)}</span>
                  <Link className="listTitle" to={`${AuthState.login.username && '/@' + AuthState.login.username}/${mylist._id}`}>
                  <span >{mylist.title}</span>
                  </Link>
                  <span className="listRemove"><button className="removeButton">삭제</button></span>
                </li>
              ))}
          </ul>
        </MyPostBlock>
      </StyledContainer>
    </>
  );
};

export default MyPost;