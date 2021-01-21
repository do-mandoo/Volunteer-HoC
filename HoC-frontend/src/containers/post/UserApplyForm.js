import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import UserApply from '../../components/post/UserApply';
import { Auth, List, Post } from '../../contexts/store';
import { withRouter } from 'react-router-dom';
import { INITAILIZE_FORM } from '../../contexts/write';

const UserApplyForm = ({ match, history }) => {
  console.log(match);
  const { postId } = match.params;
  const url = window.location.pathname;
  const parse = url.split('/');
  console.log(postId);
  
  console.log(parse);
  
  const { AuthState } = useContext(Auth);
  const { ListState } = useContext(List);
  // const { PostState, PostDispatch } = useContext(Post);

//   const onEdit = () => {
//     PostDispatch({
//       type:INITAILIZE_FORM,

//     })
// };

  const onRemove = async () => {
    try {
      // await removePost(postId);
      await axios.delete(`http://localhost:3000/api/post/${postId}`);
      await history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  const [modal, setModal] = useState(false);
  const onRemoveClick = () => {
    // 모달창 열기
    setModal(true);
  };
  const onCancel = () => {
    // 모달창 닫기
    setModal(false);
  };
  const onConfirm = () => {
    // 삭제하기 + 모달창 닫기
    setModal(false);
    onRemove(); 
  };

  const post =
    ListState.lists &&
    ListState.lists.find(list => list._id === parse[parse.length - 1]);

  console.log('POST', post);

  return (
    <UserApply
      AuthState={AuthState}
      post={post}
      ListState={ListState}
      modal={modal}
      onRemoveClick={onRemoveClick}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default withRouter(UserApplyForm);
