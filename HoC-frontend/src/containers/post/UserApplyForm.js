import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import UserApply from '../../components/post/UserApply';
import { Auth, List } from '../../contexts/store';
// import { removePost } from '../../lib/api/posts';
import { withRouter } from 'react-router-dom';
import { POST_SUCCESS } from '../../contexts/write';

const UserApplyForm = ({ match, history }) => {
  const { postId } = match.params;

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

  const { AuthState } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:3000/api/posts');
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data,
      });
    })();
  }, [ListDispatch]);

  return (
    <UserApply
      AuthState={AuthState}
      ListState={ListState}
      modal={modal}
      postId={postId}
      onRemoveClick={onRemoveClick}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default withRouter(UserApplyForm);
