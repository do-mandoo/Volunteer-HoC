import React, { useContext } from 'react';
import UserApply from '../../components/post/UserApply';
import { Auth, List, Post } from '../../contexts/store';

const UserApplyForm = () => {
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
  // console.log(post.address);
  console.log(ListState);
  console.log(post);

  return <UserApply AuthState={AuthState} post={post} ListState={ListState} />;
};

export default UserApplyForm;
