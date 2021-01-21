import React, { useContext } from 'react';
import MyPost from '../../components/post/MyPost';
import { Auth, List } from '../../contexts/store';

const MyPageContainer = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  console.log(AuthState);
  const tokenID = localStorage.getItem('token');
  const ListCompanyName = ListState.lists.find(
    list => list.user._id === tokenID
  );

  console.log(ListCompanyName, 'ddd');
  return (
    <MyPost
      AuthState={AuthState}
      ListState={ListState}
      tokenID={tokenID}
      ListCompanyName={ListCompanyName}
    />
  );
};

export default MyPageContainer;
