import React from 'react';

const MyPage = ({ AuthState, PostState }) => {
  console.log(AuthState, PostState);
  return (
    <div>
      내가 쓴 글을 보고 수정할 수 있습니다.
    </div>
  );
};

export default MyPage;