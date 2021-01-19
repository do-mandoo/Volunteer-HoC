import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserApply from '../../components/post/UserApply';
import { Auth, List, Post } from '../../contexts/store';
// import { removePost } from '../../lib/api/posts';
import { withRouter } from 'react-router-dom';



const UserApplyForm = ({match, history}) => {
  console.log(match.url);
  // const { postUrl } = match.url;
  const { postId } = match.params;
  console.log(postId);
  // console.log(match);
  

  const onEdit = async () => {
    history.push(`/write`);
  };
  console.log(onEdit);
  
  const onRemove = async () => {
    try{
      // await removePost(postId);
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
  const url = window.location.pathname;
  const parse = url.split('/');
  // console.log(parse);
  const { AuthState } = useContext(Auth);
  const { ListState } = useContext(List);
  const { PostState } = useContext(Post)
  // console.log(ListState.lists);

  const post = ListState.lists.find(
    list => list._id === parse[parse.length - 1]
  );

  console.log(post);

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
