import React, { useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import PostList from '../../components/post/PostList';
import { Auth, Post } from '../../contexts/store';
import { POST_SUCCESS } from '../../contexts/post';

const PostListForm = () => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  return <PostList AuthState={AuthState} />;
};

export default PostListForm;
