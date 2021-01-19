import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import MyPost from '../../components/post/MyPost';
import { MODIFY_ERROR, MODIFY_LOADING, MODIFY_SUCCESS } from '../../contexts/mypost';
import { Auth, List } from '../../contexts/store';

const MyPageContainer = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  console.log(AuthState);

  const fetchMyPage = async () => {
    await ListDispatch({
      type : MODIFY_LOADING,
      loading: true,
    });
    try{
      const response = await axios.get('http://localhost:3000/api/posts');
      // await ListDispatch({
      //   type: MODIFY_SUCCESS,
      //   data : response.data,
      // })
    }catch (e){
      // await ListDispatch({
      //   type : MODIFY_ERROR,
      // })
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchMyPage()
  },[])

  return <MyPost AuthState={AuthState} ListState={ListState} />;
};

export default MyPageContainer;
