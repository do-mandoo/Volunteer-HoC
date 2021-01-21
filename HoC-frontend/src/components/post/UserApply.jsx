import React from 'react';
import Header from '../common/Header';
import Button from '../common/Button';
import MapContainer from '../../lib/api/MapContainer';
import StyledContainer from '../common/Container';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

import { withRouter, Link } from 'react-router-dom';

// import MapContainer from '../../lib/api/MapContainer';
// import WritePageContainer from '../post/Write';

const UserApplyPageContainer = styled.div`
  position:relative;
  font-family: 'MapoFlowerIsland';
  /* background-color: skyblue; */
  width: 100%;
  min-height: 700px;
.a11y {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  clip-path: polygon(0 0, 0 0, 0 0);
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
}
.title{
  font-family: 'Cafe24Oneprettynight';
  font-size: 1.7rem;
  text-align:center;
}
.user-title {
  font-size: 1rem;
  border: none;
  /* border: 1px solid ${palette.gray[5]}; */
  padding-bottom: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 100%;
  }
  .user-content-wrap {
    display:flex;
    flex-flow: row wrap;
    background-color: #fff;
  }
  .user-content-right,
  .user-content-left {
    width:50%;
  }
  .user-content-right {
    /* line-height:1.5rem;
    height:100%; */
  }
  .user-content-right dl{
    font-family: 'MapoFlowerIsland';
    font-size: 1rem;
    /* text-align:center; */
    display:flex;
    /* justify-content:center; */
    align-items:center;
    flex-flow: row nowrap;
    height: 55px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    /* width:50%; */
    /* border-bottom:1px solid ${palette.gray[5]}; */
  }
  .user-content-right dt {
    text-align:center;
    width:20%;
    color: ${palette.gray[6]};

    align-items:center;
  }
  .user-content-right dd {
    background: #f8f8f8;
    /* height:50px; */
    line-height:50px;
    width:80%;
  }
  .user-body {
    display:block;
    width:100%;
    min-height: 500px;
    margin-top:10px;
    padding: 10px;
    font-size: 1.5rem;
  }
  .btn-edit,
  .btn-delete {
    font-family: 'MapoFlowerIsland';
    float:right;
  }
  .btn-edit {
    line-height:normal;
  }
  .btn-delete{
    margin-left:5px;
  }
`


const UserApply = ({ AuthState, post, modal, onCancel, onConfirm, onRemoveClick }) => {
  console.log("POST", post);
  return (
    <>
    <Header AuthState={AuthState} />
    <StyledContainer>
    <UserApplyPageContainer>
    <h1 className="title">모집 공고</h1>
    <div>
        <h2 className="a11y">모집 공고 상세 페이지</h2>
        <div >
            <h2 className="user-title" htmlFor="post-title">제목: {post && post.title}</h2>
            
            <div className="user-content-wrap">
              <div className="user-content-left">
                <MapContainer 
                  {...post}
                />
              </div>
              <div className="user-content-right">
                <dl>
                  <dt>업체명</dt>
                  <dd>{post && post.companyName}</dd>
                </dl>
                  
                <dl>
                  <dt>전화번호</dt>
                  <dd>{post && post.phoneNumber}</dd>
                </dl>

                <dl>
                  <dt>주소</dt>
                  <dd>{post && post.address}</dd>
                </dl>

                <dl>
                  <dt>봉사 기간</dt>
                  <dd>{post && post.periodStart} ~ {post && post.periodEnd}</dd>
                </dl>
                <dl>
                  <dt>봉사 시간</dt>
                  <dd>{post && post.timeStart} ~ {post && post.timeEnd}</dd>
                </dl>

                <dl>
                  <dt>인원수</dt>
                  <dd>{post && post.number}</dd>
                </dl>

                <dl>
                  <dt>성별</dt>
                  <dd>{post && post.gender}</dd>
                </dl>
                
              </div>
                <p className="user-body">
                  {post && post.body}
                </p>
              
            </div>
        </div>
          {post.user._id === localStorage.getItem('token') && (
          <>
          <Button
           className="btn-delete"
           onClick={onRemoveClick}>삭제</Button>
          <Button
          className="btn-edit"
          as={Link} 
          to={`/modify/${post._id}`}
          >수정
          </Button> 
          <AskRemoveModal 
            visible={modal}
            onConfirm={onConfirm}
            onCancel={onCancel} 
          />
          </>
          )}

    </div>
    </UserApplyPageContainer>
    </StyledContainer>
    </>
  );
};

export default withRouter(UserApply);