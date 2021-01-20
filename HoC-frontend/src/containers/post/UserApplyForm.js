import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserApply from '../../components/post/UserApply';
import { Auth, List, Post } from '../../contexts/store';
import { withRouter } from 'react-router-dom';



const UserApplyForm = ({match, history}) => {
  // console.log(match.url);
  const { postId } = match.params;
  const url = window.location.pathname;
  const parse = url.split('/');
  // console.log(parse);
  const { AuthState } = useContext(Auth);
  const { ListState } = useContext(List);
  const { PostState } = useContext(Post)
  // console.log(ListState.lists);

  // console.log(PostState);
  // console.log(ListState);
  // console.log(AuthState);
  // console.log(11);
  
     const post = ListState.lists.find(
    list => list._id === parse[parse.length - 1]
  );
  
  const onEdit = () => {
      history.push(`/write`);
  };
  
  const onRemove = async () => {
    try{
      await axios.delete(
        `http://localhost:3000/api/post/${postId}`
        );
       await history.push('/');
    }catch(error) {
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



  return <UserApply 
  AuthState={AuthState} 
  post={post} 
  ListState={ListState}
  modal={modal}
  onRemoveClick={onRemoveClick}
  onCancel={onCancel}
  onConfirm={onConfirm}
  onEdit={onEdit}
  />;
};

export default withRouter(UserApplyForm);
