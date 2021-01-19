import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import StyledContainer from '../common/Container';

const GlobalList = styled.div`
  width: 100%;
  background-color: #aaa;
`
const HeaderName = styled.div`
  background : black;
  text-decoration : underline;
  color : white;
  margin-bottom: 10px;
  padding: 20px 0;

  h1{
    font-size : 24px;
    text-align : center;
  }
`;

const BodyList = styled.div`
  width : 100%;
  height : 500px;
  border: 1px solid red;
  padding: 4px;

  .ListWrap{
    display:flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }

  .Left, .Right{
    width: 50%;
    height: 100%;
    background-color:white;
    margin: 5px;
    padding:10px;
    text-align:center;
    font-weight:700;
    font-size:26px;
  }

  .Left{
    width: 70%;
    list-style: none;
    display:inline-block;
  }
  
  .Right{
    width: 30%;
  }

  li{
    padding-bottom: 10px;
    padding:10px 0;
    margin:0px;
    background-color: #eee;
    text-align:left;
    font-weight:400;
    font-size:16px;
  }

`;

const Footer = styled.div`
  width : 100%

`;

const MyPost = ({ AuthState, ListState }) => {
  console.log(ListState);
  return (
    <>
      <Header AuthState={AuthState} />
      <StyledContainer>
      <GlobalList>
        <HeaderName>
          <div>
            <h1>내가 작성한 모집 공고</h1>
          </div>
        </HeaderName>
        <BodyList>
          <div>
            <div className="ListWrap">
              <ul className='Left'>
                모집공고
                <li>
                  <span>제목</span>
                  <span>자세히 보기</span>
                </li>
                {/* {ListState.lists.map(list=>(
                  <li key = {list.user.id}>
                    <span>{list.title}</span>
                    <span>{list.period}</span>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </BodyList>
        <Footer>
          心봉사
        </Footer>
      </GlobalList>
      </StyledContainer>
    </>
  );
};

export default MyPost;