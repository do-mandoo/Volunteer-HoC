import React, { useContext, useEffect } from 'react';
import { Auth, Post } from '../../contexts/store';
import Modify from '../../components/post/Modify';
import axios from 'axios';
import { INITAILIZE_FORM, CHANGE_FIELD } from '../../contexts/write';
import { POSTSTATE_INPUT_VALUE } from '../../contexts/write';
import { withRouter } from 'react-router-dom';



const ModifyForm = ({ match, history }) => {
  const { postId } = match.params;
  // const url = window.location.pathname;
  // const parse = url.split('/');
  
  const { AuthState, AuthDispatch } = useContext(Auth);
  const { PostState, PostDispatch } = useContext(Post);
  console.log(PostState);
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
    patch();
    // poststate 초기화하기
    history.push('/');
  };

  const patch = async () => {
    // console.log(PostState.posts.title);
    try{
      const res = await axios.patch(
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
      )
      console.log(res);
      
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const checkLogin = (async () => {
      const res = await axios.get(`/api/post/${postId}`);
      await console.log(res);
      // console.log(res.data[0].address);
      await PostDispatch({
        type: POSTSTATE_INPUT_VALUE,
        body: res.data[0].body,
        companyName: res.data[0].companyName,
        gender: res.data[0].gender,
        number: res.data[0].number,
        periodEnd: res.data[0].periodEnd,
        periodStart: res.data[0].periodStart,
        phoneNumber: res.data[0].phoneNumber,
        timeEnd: res.data[0].timeEnd,
        timeStart: res.data[0].timeStart,
        title: res.data[0].title,
        address: res.data[0].address,
      });
      // await console.log(PostState);
    })();
    return() => {
      console.log('얍');
      PostDispatch({
        type: INITAILIZE_FORM,
      })
      // console.log(PostState);
    };
  }, []);
  return (
      <Modify 
      AuthState={AuthState}
      PostState={PostState}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  );
};

export default withRouter(ModifyForm);