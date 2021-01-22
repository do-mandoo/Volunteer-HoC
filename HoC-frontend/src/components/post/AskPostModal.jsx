import React from 'react';
import styled from 'styled-components';
import AskModal from '../common/AskModal';
import Button from '../common/Button';
// 모달 팝업창의 view 역할
const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalBlock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  height: 2rem;

  & + & {
    margin-left: 0.75rem;
  }
`;
const AskPostModal = ({ visible, onConfirm, onCancel }) => {
  
    if (!visible) return null;
    return (
      <Fullscreen>
        <AskModalBlock>
          <p>변경 사항이 저장되지 않습니다. 정말로 나가시겠습니까?</p>
          <div className="buttons">
            <StyledButton onClick={onCancel}>취소</StyledButton>
            <StyledButton cyan onClick={onConfirm}>
              나가기
            </StyledButton>
          </div>
        </AskModalBlock>
      </Fullscreen>
    );
  
};

export default AskPostModal;