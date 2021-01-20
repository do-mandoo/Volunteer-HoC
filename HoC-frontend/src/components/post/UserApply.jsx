import React from 'react';
import Header from '../common/Header';
import Button from '../common/Button';
import MapContainer from '../../lib/api/MapContainer';
import StyledContainer from '../common/Container';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

import { withRouter } from 'react-router-dom';

// import MapContainer from '../../lib/api/MapContainer';
// import WritePageContainer from '../post/Write';

const UserApplyPageContainer = styled.div`
  position:relative;
  background-color: skyblue;
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
.user-title {
  font-size: 1rem;
  border: none;
  border: 1px solid ${palette.gray[5]};
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
    /* margin-left:10px; */
    line-height:1.5rem;
    height:100%;
  }
  .user-content-right dl{
    font-size: 1rem;
    text-align:center;
    display:flex;
    flex-flow: row nowrap;
    /* width:50%; */
    border-bottom:1px solid ${palette.gray[5]};
  }
  .user-content-right dt {
    width:30%;
    background-color: ${palette.gray[5]};
  }
  .user-content-right dd {
    width:70%;
  }
  .user-content-right p {
    width:100%;
    min-height: 500px;
  }
`


const UserApply = ({ AuthState,post, modal, onCancel, onConfirm, onRemoveClick, onEdit }) => {
  return (
    <>
    <Header AuthState={AuthState} />
    <StyledContainer>
    <UserApplyPageContainer>
    <h1>봉사 정보에 대한 상세 내용</h1>
    <div>
        <h2 className="a11y">모집 공고 상세 페이지</h2>
        <div >
            <h2 className="user-title" htmlFor="post-title">제목: {post.title}</h2>
            
            <div className="user-content-wrap">
              <div className="user-content-left">
                <MapContainer 
                  {...post}
                />
              </div>
              <div className="user-content-right">
                <dl>
                  <dt>업체명</dt>
                  <dd>{post.companyName}</dd>
                </dl>
                  
                <dl>
                  <dt>전화번호</dt>
                  <dd>{post.phoneNumber}</dd>
                </dl>

                <dl>
                  <dt>주소</dt>
                  <dd>{post.address}</dd>
                </dl>

                <dl>
                  <dt>봉사 기간</dt>
                  <dd>{post.periodStart} ~ {post.periodEnd}</dd>
                </dl>
                <dl>
                  <dt>봉사 시간</dt>
                  <dd>{post.timeStart} ~ {post.timeEnd}</dd>
                </dl>
                <dl>
                  <dt>봉사시간</dt>
                  <dd>{post.timeStart} ~ {post.timeEnd} </dd>
                </dl>

                <dl>
                  <dt>인원수</dt>
                  <dd>{post.number}</dd>
                </dl>

                <dl>
                  <dt>성별</dt>
                  <dd>{post.gender}</dd>
                </dl>
                
              </div>
                <p>
                  {post.body}
                </p>
              
            </div>
        </div>
          {/* {localStorage.getItem('token') && AuthState.company && AuthState.company.username === post.user._id && (<><Button>수정</Button> <Button onClick={onClick}>삭제</Button></>) } */}
          {localStorage.getItem('token') && AuthState.company && AuthState.company.username === post.user._id && (
          <>
          <Button onClick={onEdit}>수정</Button> 
          <Button onClick={onRemoveClick}>삭제</Button>
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