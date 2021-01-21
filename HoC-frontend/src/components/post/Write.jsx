import React from 'react';
import styled from 'styled-components';
// import { StyledInput } from '../auth/Register';
import MapContainer from '../../lib/api/MapContainer';
import StyledContainer from '../common/Container';
import palette from '../../lib/styles/palette';
import Header from '../common/Header';
import Button from '../common/Button';
// import Select from 'react-select';
export const WritePageContainer = styled.div`
  position:relative;
  font-family: 'MapoFlowerIsland';
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
#post-title {
  font-size: 1.5rem;
  padding:10px;
}
.post-content-wrap {
  display:flex;
  justify-content:center;
  text-align:center;
  background-color: #fff;
}
.post-content-left,
.post-content-right {
  width:50%;
}
.post-content-right {
  display:flex;
  flex-flow: row wrap;
}
.post-content-right label {
  display:flex;
  align-items:center;
  justify-content:center;
  width:20%;
  color: ${palette.gray[6]};
}
.post-content-right input,
.post-content-right select {
  width: 80%;
}
#post-people,
#post-gender {
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  color: rgb(118,118,118);
  width:80%;
}

.period-wrap {
  width:100%;
  display: flex;
  text-align:center;
  justify-content:center;
  align-items:center;
}
.period-wrap label:first-child {
  width:50%;
}
.period-wrap input {
  /* width:70%; */
}
.btn-cancel,
.btn-add {
}
.btn-cancel{
  float:right;
}
.btn-add{
  float:right;
  margin-left:5px;
}


`
export const StyledSelect = styled.select`
  /* font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  color: rgb(118,118,118); */
  
  /* width: 100%; */
  /* &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  } */
`;
export const StyledTextarea = styled.textarea`
  font-family: 'MapoFlowerIsland';
  font-size: 1.5rem;
  width:100%;
  min-height: 500px;
  resize:none;
  outline:none;
  /* border:1px solid #eee; */
  border:none;
  margin-top:10px;
  padding: 10px;
`;
export const StyledInput = styled.input`
  font-family: 'MapoFlowerIsland';
  font-size: 1rem;
  border: none;
  background: #f8f8f8;
  /* padding-bottom: 0.5rem; */
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: $oc-teal-7;
    /* border-bottom: 1px solid ${palette.gray[7]}; */
  }

  & + & {
    /* margin-top: 1rem; */
  }
`;


export const Write = ({ PostState, AuthState, onChange, onSubmit }) => {
  console.log("AuthState", AuthState);
  console.log(1);
  
  return (
    <>
    <Header AuthState={AuthState} />
    <StyledContainer>
    <WritePageContainer>
    <div>
        <h1 className="a11y">모집 공고 등록 페이지</h1>
        <h2 className="title">모집 공고 등록</h2>
        <form onSubmit={onSubmit}>
          <legend>
            <fieldset>
              <p>
                <label className="a11y" htmlFor="post-title">공고 제목</label>
                <StyledInput 
                  id="post-title" 
                  name="title"
                  type="text" 
                  placeholder="모집 공고의 제목을 입력해 주세요"
                  onChange={onChange} />
              </p>
              <div className="post-content-wrap">
                <div className="post-content-left">
                <MapContainer
                    {...PostState.posts}
                  />
                </div>
                <div className="post-content-right">
                  <label htmlFor="post-name">업체명</label>
                  <StyledInput 
                  id="post-name" 
                  name="companyName"
                  type="text" 
                  placeholder="업체명을 입력해주세요." 
                  defaultValue={AuthState.company.companyName}
                  onChange={onChange}
                  />
                  <label htmlFor="post-phone">전화번호</label>
                  <StyledInput 
                  id="post-phone" 
                  name="phoneNumber"
                  type="text" 
                  placeholder="전화번호를 입력해주세요."
                  defaultValue={AuthState.company.phoneNumber}
                  onChange={onChange}
                  />
                  <label htmlFor="post-address">주소</label>
                  <StyledInput 
                  id="post-address" 
                  name="address"
                  type="text" 
                  placeholder="주소를 입력해주세요." 
                  defaultValue={AuthState.company.address}
                  onChange={onChange}
                  />
                  <div className="period-wrap">
                  <label htmlFor="post-period-start">기간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="periodStart"
                  type="date" 
                  onChange={onChange}
                  />
                  <label htmlFor="post-period-end"> ~ </label>
                  <StyledInput 
                  id="post-period-end" 
                  name="periodEnd"
                  type="date" 
                  onChange={onChange}
                        />
                </div>
                <div className="period-wrap">
                  <label htmlFor="post-period-start">시간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeStart"
                  type="time" 
                  onChange={onChange}
                        />
                  <label htmlFor="post-period-start"> ~ </label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeEnd"
                  type="time" 
                  onChange={onChange}
                  />
                  </div>
                  <label 
                  htmlFor="post-people">인원수</label>
                  {/* <StyledInput 
                  id="post-people" 
                  type="text" 
                  placeholder="원하는 인원수를 입력해주세요." 
                  /> */}
                  <StyledSelect 
                  id="post-people"
                  name="number"
                  onChange={onChange}
                  >
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
                  <StyledSelect 
                  id="post-gender"
                  name="gender"
                  onChange={onChange}>
                    <option value="">원하는 봉사자의 성별을 골라주세요</option>
                    <option value="남">남</option>
                    <option value="여">여</option>
                    <option value="성별무관">성별무관</option>
                  </StyledSelect>
                </div>
              </div>
                <StyledTextarea
                placeholder="봉사 활동 관련한 상세한 내용을 적어주세요."
                name="body"
                onChange={onChange}
                ></StyledTextarea>
              <Button className="btn-add">등록</Button>
              <Button className="btn-cancel">취소</Button>
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