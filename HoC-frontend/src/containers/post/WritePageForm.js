import React, { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom'; 
import axios from 'axios';
import { AUTHSTATE_INPUT_VALUE, CHANGE_FIELD, POST_SUCCESS } from '../../contexts/write';
import { Auth, List, Post } from '../../contexts/store';
import Write from '../../components/post/Write';
import { CHECK_LOGIN, FILL_WRITE_INPUT } from '../../contexts/auth';

const WritePageForm = ({ history }) => {
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { PostState, PostDispatch } = useContext(Post);

  const post = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/posts', {
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
      });
      console.log(response);
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
    console.log(PostState);
  };

  const onSubmit = async e => {
    e.preventDefault();
    post();
    history.push('/');
  };

  useEffect(() => {
    const checkLogin = (async () => {
      const response = await axios.get('/api/auth/check/company');
      console.log('RESPONSE', response);
      await AuthDispatch({
        type: FILL_WRITE_INPUT,
        form: 'company',
        id: response.data._id,
        username: response.data.username,
        companyName: response.data.companyName,
        address: response.data.address,
        phoneNumber: response.data.phoneNumber,
      });
      await PostDispatch({
        type: AUTHSTATE_INPUT_VALUE,
        address: response.data.address,
        phoneNumber: response.data.phoneNumber,
        companyName: response.data.companyName,
      });
    })();
  }, [AuthDispatch]);

  return (
    <Write
      AuthState={AuthState}
      PostState={PostState}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
export default withRouter(WritePageForm);
