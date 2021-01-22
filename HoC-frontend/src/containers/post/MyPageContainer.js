import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import MyPost from '../../components/post/MyPost';
import { POST_SUCCESS } from '../../contexts/list';
import { Auth, List } from '../../contexts/store';
const arr = [];

const MyPageContainer = ({ match, history }) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = (e) => {
    // 모달창 열기
    setModal(true);
  };
  const onCancel = () => {
    // 모달창 닫기
    setModal(false);
  };
  const onConfirm = () => {
    // 삭제+ 모달창 닫기
    setModal(false);
    AllRemove();
  };

  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  const tokenID = localStorage.getItem('token');
  const ListName = ListState.lists.filter(list=>list.user._id === tokenID)
  
  const onChecking = e => {
    console.log(e.target.checked,8);
    if(e.target.checked === true) {
      arr.push(e.target.parentNode.id);
    }
    else{
      arr.splice(arr.indexOf(e.target.parentNode));
    }
    console.log(arr,11);
  }

  // const onAllClick = e => {
  //   console.log(e.target);
  // }

  const AllRemove = async(e) => {
    try{
      arr.map(async ar=>await axios.delete(`http://localhost:3000/api/post/${ar}`))

      const response = await axios.get('http://localhost:3000/api/posts');
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data
      })

      await history.push('/mypage');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:3000/api/posts');
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data,
      });
    })();
  }, [ListDispatch]);

  return <MyPost 
    AuthState={AuthState} 
    ListState={ListState} 
    modal={modal}
    ListName={ListName}
    onRemoveClick={onRemoveClick} 
    onConfirm={onConfirm} 
    onCancel={onCancel}
    onChecking={onChecking}
    // onAllClick={onAllClick}
    />;
};

export default MyPageContainer;
