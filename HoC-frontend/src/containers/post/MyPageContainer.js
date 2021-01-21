import axios from 'axios';
import React, { useContext, useRef, useState} from 'react';
import MyPost from '../../components/post/MyPost';
import { POST_SUCCESS } from '../../contexts/list';
import { Auth, List } from '../../contexts/store';
const arr = [];

const MyPageContainer = ({match, history}) => {
  const [modal, setModal] = useState(false);
  const onRemoveClick = (e) => {
    // 모달창 열기
    setModal(true);
  }
  const onCancel = () => {
    // 모달창 닫기
    setModal(false);
  }
  const onConfirm = () => {
    // 삭제+ 모달창 닫기
    setModal(false);
    AllRemove();
  }

  const { AuthState, AuthDispatch } = useContext(Auth);
  const { ListState, ListDispatch } = useContext(List);
  const tokenID = localStorage.getItem('token');
  const ListName = ListState.lists.filter(list=>list.user._id === tokenID)
  
  const onChecking = e => {
    if(e.target.checked === true) {
      arr.push(e.target.parentNode.id);
    }else{
      arr.splice(arr.splice(arr.indexOf(e.target.parentNode)))
    }
    console.log(arr,11); 
  }

  const AllRemove = async(e) => {
    try{
      arr.map(async ar=>await axios.delete(`http://localhost:3000/api/post/${ar}`))

      const response = await axios.get('http://localhost:3000/api/posts');
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data
      })

      await history.push('/mypage');
      console.log(arr,33);
    } catch(e){
      console.log(e);
    }
  }

  return <MyPost 
    AuthState={AuthState} 
    ListState={ListState} 
    modal={modal}
    tokenID={tokenID}
    ListName={ListName}
    onRemoveClick={onRemoveClick} 
    onConfirm={onConfirm} 
    onCancel={onCancel}
    onChecking={onChecking}
    />;
};

export default MyPageContainer;
