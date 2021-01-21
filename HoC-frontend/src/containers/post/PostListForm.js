import React, { useCallback, useContext, useEffect } from 'react';
import axios from 'axios';
import { Auth, List, Post } from '../../contexts/store';
import PostList from '../../components/post/PostList';

import { POST_FAIL, POST_LOADING, POST_SUCCESS } from '../../contexts/list';

const PostListForm = () => {
  const { AuthState } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);

  const fetchList = useCallback(async () => {
    await ListDispatch({
      type: POST_LOADING,
      loading: true,
    });
    try {
      const response = await axios.get('http://localhost:3000/api/posts');
      console.log(response);
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data,
      });
      await console.log(ListState);
    } catch (e) {
      await ListDispatch({
        type: POST_FAIL,
      });
    }
  }, [ListDispatch]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return <PostList AuthState={AuthState} ListState={ListState} />;
};

export default PostListForm;
