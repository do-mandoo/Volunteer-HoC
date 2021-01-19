import React, { useContext } from 'react';
import UserApply from '../../components/post/UserApply';
import { Auth, List } from '../../contexts/store';

const UserApplyForm = () => {
  const url = window.location.pathname;
  const parse = url.split('/');
  console.log(parse);
  const { AuthState } = useContext(Auth);
  const { ListState } = useContext(List);

  const post = ListState.lists.find(
    list => list._id === parse[parse.length - 1]
  );
  return <UserApply AuthState={AuthState} post={post} />;
};

export default UserApplyForm;
