import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import MyPost from '../../components/post/MyPost';
import { CHANGE_LIST, MODIFY_ERROR, MODIFY_LOADING, MODIFY_SUCCESS } from '../../contexts/mypost';
import { Auth, List } from '../../contexts/store';

const MyPageContainer = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  // console.log(ListState,"A");
  const localID = localStorage.getItem('token');
  console.log("LocalID : ",localID);
  
  const ListID = ListState.lists[0];
  console.log("ListID배열 : ", ListID);

  // const LID = ListState.lists[0]._id.user._id;
  // console.log("ListIDFULL : ", LID);

  const fetchMyPage = async () => {
    try{
      console.log(ListState,"B");
      

    }catch (e){
      
      console.log(e);
    }
  }

  useEffect(()=>{
    fetchMyPage()
  },[])

  return <MyPost AuthState={AuthState} ListState={ListState} />;
};

export default MyPageContainer;
