import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AUTHSTATE_INPUT_VALUE, CHANGE_FIELD } from '../../contexts/write';
import { Auth, Post } from '../../contexts/store';
import Write from '../../components/post/Write';
const WritePageForm = () => {
  const { AuthState } = useContext(Auth);
  const { PostState, PostDispatch } = useContext(Post);
  console.log(PostState);
  console.log(AuthState);
  const post = async () => {
    console.log(PostState.posts);
    try {
      await axios.post('http://localhost:3000/api/posts', {
        title: PostState.posts.title,
        body: PostState.posts.body,
        address: PostState.posts.address,
        periodstart: PostState.posts.periodstart,
        periodend: PostState.posts.periodend,
        timeStart: PostState.posts.timeStart,
        timeEnd: PostState.posts.timeEnd,
        gender: PostState.posts.gender,
        phoneNumber: PostState.posts.phoneNumber,
        number: PostState.posts.number,
        companyName: PostState.posts.companyName,
      });
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

  const onSubmit = async e => {
    e.preventDefault();
    post();
  };

  const address = localStorage.getItem('address');
  const companyName = localStorage.getItem('companyName');
  const phoneNumber = localStorage.getItem('phoneNumber');

  useEffect(() => {
    PostDispatch({
      type: AUTHSTATE_INPUT_VALUE,
      address: AuthState.company.address,
      companyName: AuthState.company.companyName,
      phoneNumber: AuthState.company.phoneNumber,
    });
  }, []);

  return (
    <Write AuthState={AuthState} onChange={onChange} onSubmit={onSubmit} />
  );
};
export default WritePageForm;
