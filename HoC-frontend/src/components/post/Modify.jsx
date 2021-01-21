import React from 'react';
import Header from '../common/Header';
import StyledContainer from '../common/Container';
import { WritePageContainer, StyledSelect, StyledTextarea } from './Write';
import { StyledInput } from '../post/Write';
import MapContainer from '../../lib/api/MapContainer';
import Button from '../common/Button';

const Modify = ({ PostState, AuthState, onChange, onSubmit }) => {
  // console.log(AuthState);
  // console.log(PostState);
  console.log(PostState.posts);
  // console.log(PostState.posts.address);
  
  
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
                  defaultValue={PostState.posts.title}
                  onChange={onChange} />
              </p>
              <div className="post-content-wrap">
                <div className="post-content-left">
                <MapContainer
                    {...AuthState}
                  />
                </div>
                <div className="post-content-right">
                  <label htmlFor="post-name">업체명</label>
                  <StyledInput 
                  id="post-name" 
                  name="companyName"
                  type="text" 
                  placeholder="업체명을 입력해주세요." 
                  defaultValue={PostState.posts.companyName}
                  onChange={onChange}
                  />
                  <label htmlFor="post-phone">전화번호</label>
                  <StyledInput 
                  id="post-phone" 
                  name="phoneNumber"
                  type="text" 
                  placeholder="전화번호를 입력해주세요."
                  defaultValue={PostState.posts.phoneNumber}
                  onChange={onChange}
                  />
                  <label htmlFor="post-address">주소</label>
                  <StyledInput 
                  id="post-address" 
                  name="address"
                  type="text" 
                  placeholder="주소를 입력해주세요." 
                  defaultValue={PostState.posts.address}
                  onChange={onChange}
                  />
                  <div className="period-wrap">
                  <label htmlFor="post-period-start">기간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="periodStart"
                  type="date" 
                  defaultValue={PostState.posts.periodStart}
                  onChange={onChange}
                  />
                  <label htmlFor="post-period-end"> ~ </label>
                  <StyledInput 
                  id="post-period-end" 
                  name="periodEnd"
                  type="date"
                  defaultValue={PostState.posts.periodEnd} 
                  onChange={onChange}
                        />
                </div>
                <div className="period-wrap">
                  <label htmlFor="post-period-start">시간</label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeStart"
                  type="time" 
                  defaultValue={PostState.posts.timeStart}
                  onChange={onChange}
                        />
                  <label htmlFor="post-period-start"> ~ </label>
                  <StyledInput 
                  id="post-period-start" 
                  name="timeEnd"
                  type="time" 
                  defaultValue={PostState.posts.timeEnd}
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
                  defaultValue={PostState.posts.number}
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
                  defaultValue={PostState.posts.gender}
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
                defaultValue={PostState.posts.body}
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

export default Modify;