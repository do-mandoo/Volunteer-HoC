import React, { useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { Auth, List, Post } from '../../contexts/store';
import PostList from '../../components/post/PostList'

import {
  POST_FAIL,
  POST_LOADING,
  POST_SUCCESS
} from '../../contexts/list'

  
  const PostListForm = () => {  
    
  const {AuthState} = useContext(Auth);

  const {ListState,ListDispatch} = useContext(List);
  
  const fetchList = async () => {
    await ListDispatch({
      type:POST_LOADING,
      loading:true,
    })
    try{
      const response = await axios.get("http://localhost:3000/api/posts")
      await ListDispatch({
        type:POST_SUCCESS,
        data:response.data
      })
       console.log(response.data)
       console.log(ListState)
     }catch(e){
      await ListDispatch({
        type:POST_FAIL,
      })
     }
  }

  useEffect(()=>{
    fetchList()
  },[])
  
  
  return (
    <PostList AuthState={AuthState} ListState={ListState}/>
  );

const PostListForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  return <PostList AuthState={AuthState} />;

};

export default PostListForm;