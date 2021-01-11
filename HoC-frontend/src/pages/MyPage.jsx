import React from 'react';
import StyledContainer from '../components/common/Container';
import styled from 'styled-components';
import Button from '../components/common/Button';

const HeaderName = styled.div`
  width: 50px;
  height: 50px;
  background: black;
  text-decoration:underline;
  background-color: red;
`;

const UnderLine = styled.div`
  width:100%;
  heigth : 1px;
`;


const MyPage = ({childern}) => {
  return (
    <>
      <StyledContainer>  
        <div>내가 쓴 모집 공고</div>
        <HeaderName>
          ddd
          <Button style={{width:100}}>수정하기</Button>
        </HeaderName>
        <UnderLine />
        
      </StyledContainer>
    </>
  );
};

export default MyPage;
