import React, { useCallback, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Auth, Post } from '../../contexts/store';
import { CHANGE_FIELD, MODIFY_FORM, POST_SUCCESS } from '../../contexts/write';
import Write from '../../components/post/Write';
import { REGISTER_INFO } from '../../contexts/auth';

const ModifyForm = ({ history, match }) => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { PostState, PostDispatch } = useContext(Post);
  const { postId } = match.params;

  const modify = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/post/${postId}`,
        {
          title: PostState.posts.title,
          body: PostState.posts.body,
          address: PostState.posts.address,
          periodStart: PostState.posts.periodStart,
          periodEnd: PostState.posts.periodEnd,
          timeStart: PostState.posts.timeStart,
          timeEnd: PostState.posts.timeEnd,
          gender: PostState.posts.gender,
          phoneNumber: PostState.posts.phoneNumber,
          number: PostState.posts.number,
          companyName: PostState.posts.companyName,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = e => {
    const { value, name } = e.target;
    PostDispatch({
      type: CHANGE_FIELD,
      key: name,
      value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    modify();
    PostDispatch({
      type: POST_SUCCESS,
    });
    console.log(PostState);
    history.push('/');
  };

  const getPost = useCallback(async () => {
    const response = await axios.get(
      `http://localhost:3000/api/post/${postId}`
    );
    const {
      title,
      body,
      address,
      companyName,
      gender,
      number,
      periodStart,
      periodEnd,
      timeStart,
      timeEnd,
      phoneNumber,
    } = response.data['0'];
    await PostDispatch({
      type: MODIFY_FORM,
      title,
      body,
      companyName,
      address,
      gender,
      number,
      periodStart,
      periodEnd,
      timeStart,
      timeEnd,
      phoneNumber,
    });
    await AuthDispatch({
      type: REGISTER_INFO,
      form: 'company',
      companyName,
      phoneNumber,
      address,
    });
  }, [AuthDispatch, PostDispatch, postId]);

  useEffect(() => {
    getPost();
    return () => {
      PostDispatch({
        type: POST_SUCCESS,
      });
    };
  }, [getPost, PostDispatch]);

  return (
    <Write
      PostState={PostState}
      AuthState={AuthState}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default withRouter(ModifyForm);
