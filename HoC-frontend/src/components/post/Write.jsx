import React from 'react';
import styled from 'styled-components';
import { StyledInput } from '../auth/Register';
import MapContainer from '../../lib/api/MapContainer';
import StyledContainer from '../common/Container';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';


const WritePageContainer = styled.div`
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
  .post-content-wrap {
    display: flex;
    align-content: center;
    background-color: #fff;
  }

  .post-content-left,
  .post-content-right {
    width: 50%;
  }
  .post-content-right {
    display: flex;
    flex-flow: row wrap;
  }
  .post-content-right label {
    width: 20%;
  }
  .post-content-right input {
    width: 80%;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  /* height: 300px; */
  /* display:flex; */
  /* flex:1; */
  /* display: flex; */
  flex-grow: 1;
  /* height:100%; */
`;

const StyledSelect = styled.select`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  color: rgb(118,118,118);
  /* width: 100%; */
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;


const Write = ({ company }) => {
  console.log(company);
  return (
    <>
    <Header />
    <StyledContainer>
    <WritePageContainer>
    <div>
        <h1 className="a11y">모집 공고 등록 페이지</h1>
        <h2>모집 공고 등록</h2>
        <form>
          <legend>
            <fieldset>
              <p>
                <label className="a11y" for="post-title">공고 제목</label>
                <StyledInput 
                  id="post-title" 
                  type="text" 
                  placeholder="모집 공고의 제목을 입력해 주세요"/>
              </p>
              <div className="post-content-wrap">
                <div className="post-content-left">
                <MapContainer
                    {...company}
                  />
                </div>
                <div className="post-content-right">
                  <label htmlFor="post-name-">업체명</label>
                  <StyledInput 
                  id="post-name" 
                  type="text" 
                  placeholder="업체명을 입력해주세요." 
                  />
                  <label htmlFor="post-phone">전화번호</label>
                  <StyledInput 
                  id="post-phone" 
                  type="text" 
                  placeholder="전화번호를 입력해주세요." 
                  />
                  <label htmlFor="post-address">주소</label>
                  <StyledInput 
                  id="post-address" 
                  type="text" 
                  placeholder="주소를 입력해주세요." 
                  />
                  <label htmlFor="post-period">기간</label>
                  <StyledInput 
                  id="post-period" 
                  type="date" 
                  placeholder="원하는 봉사 기간을 입력해주세요." 
                  />
                  <label htmlFor="post-people">인원수</label>
                  {/* <StyledInput 
                  id="post-people" 
                  type="text" 
                  placeholder="원하는 인원수를 입력해주세요." 
                  /> */}
                  <StyledSelect id="post-people">
                    <option value="">원하는 인원수를 입력해주세요</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </StyledSelect>
                  <label htmlFor="post-gender">성별</label>
                  {/* <StyledInput 
                  id="post-gender" 
                  type="text" 
                  placeholder="성별을 입력해주세요." 
                  /> */}
                  <StyledSelect id="post-gender">
                    <option value="">원하는 봉사자의 성별을 골라주세요</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                    <option value="성별무관">성별무관</option>
                  </StyledSelect>
                </div>
              </div>
                <StyledTextarea
                placeholder="봉사 활동 관련한 상세한 내용을 적어주세요."
                ></StyledTextarea>
              <button 
               className="btn-cancel"
              >취소</button>
              <button
               className="btn-add"
              >등록</button>
            </fieldset>
          </legend>
        </form>
    </div>
  </WritePageContainer>
    </StyledContainer>
    </>
  );
};

export default Write;