import axios from 'axios';
import React, { useContext, useEffect,useState } from 'react';
import MyPost from '../../components/post/MyPost';
import { MODIFY_ERROR, MODIFY_LOADING, MODIFY_SUCCESS } from '../../contexts/mypost';
import { Auth, List } from '../../contexts/store';




const MyPageContainer = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  const tokenId = localStorage.getItem('token');
console.log(tokenId)
  return <MyPost AuthState={AuthState} ListState={ListState} tokenId={tokenId}/>;
};

export default MyPageContainer;
