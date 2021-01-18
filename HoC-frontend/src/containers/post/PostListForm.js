import React, { useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import PostList from '../../components/post/PostList';
import { Auth, Post } from '../../contexts/store';
import { POST_SUCCESS } from '../../contexts/post';

const PostListForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { PostState, PostDispatch } = useContext(Post);
  //post
  //비동기 작업
  const fetchList = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return <PostList AuthState={AuthState} PostState={PostState} />;
};

export default PostListForm;
