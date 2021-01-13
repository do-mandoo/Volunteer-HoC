import React, { useContext } from 'react';
import styled from 'styled-components';
import StyledContainer from '../../components/common/Container';
import { StyledInput } from '../../components/auth/Register';
import { Auth } from '../../contexts/store';
import MapContainer from '../MapContainer';

const WritePageContainer = styled.div`
  background-color: skyblue;
  width: 100%;
  min-height: 700px;

  form {
    /* width:100%;
  height:700px;
  display: flex;
  flex-direction: column; */
  }
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
const WritePageForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  console.log(AuthState);
  return (
    <StyledContainer>
      <WritePageContainer>
        <div>
          <h1 className="a11y">모집 공고 등록 페이지</h1>
          <h2>모집 공고 등록</h2>
          <MapContainer {...AuthState} />
          <form>
            <legend>
              <fieldset>
                <p>
                  <label className="a11y" htmlFor="post-title">
                    공고 제목
                  </label>
                  <StyledInput
                    id="post-title"
                    type="text"
                    placeholder="모집 공고의 제목을 입력해 주세요"
                  />
                </p>

                <div className="post-content-wrap">
                  <div className="post-content-left">왼</div>

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
                      type="text"
                      placeholder="원하는 봉사 기간을 입력해주세요."
                    />

                    <label htmlFor="post-people">인원수</label>
                    <StyledInput
                      id="post-people"
                      type="text"
                      placeholder="원하는 인원수를 입력해주세요."
                    />

                    <label htmlFor="post-gender">성별</label>
                    <StyledInput
                      id="post-gender"
                      type="text"
                      placeholder="성별을 입력해주세요."
                    />
                  </div>
                </div>
                {/* <label htmlFor="post-input" className="a11y">공고 내용 입력</label>
                <StyledInput 
                id="post-input" 
                type="text"  
                placeholder="내용을 입력해주세요." 
                /> */}
                <StyledTextarea placeholder="봉사 활동 관련한 상세한 내용을 적어주세요."></StyledTextarea>

                <button>취소</button>
                <button>등록</button>
              </fieldset>
            </legend>
          </form>
        </div>
      </WritePageContainer>
    </StyledContainer>
  );
};

export default WritePageForm;
