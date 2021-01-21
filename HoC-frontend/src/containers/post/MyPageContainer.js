import axios from 'axios';
import React, { useContext, useRef, useState} from 'react';
import MyPost from '../../components/post/MyPost';
import { POST_SUCCESS } from '../../contexts/list';
import { Auth, List } from '../../contexts/store';
const arr = [];

const MyPageContainer = ({match, history}) => {
  // console.log(match.params,555);
  



  const [modal, setModal] = useState(false);
  const onRemoveClick = (e) => {
    // console.log(e.target.previousElementSibling,999);
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
  console.log(ListState,'이겅');
  const tokenID = localStorage.getItem('token');
  console.log(ListState,'요겅');
  const ListName = ListState.lists.filter(list=>list.user._id === tokenID)
  // const ListCompanyName = ListState.lists.find(list=>list.user._id === tokenID)
  // console.log(ListName,33);
  // const Lists_ID = ListState.lists.map(list=>list._id)
  // console.log(Lists_ID,9);
  
  const onChecking = e => {
    // console.log(e.target.checked,1); 
    // 빈배열에 1이 true라면 빈배열에 2를 담고 계속 push. 전체삭제눌렀을때, 그 배열을 순회하면서 delet요청 보내기.
    // console.log(e.target.parentNode.id,2);
    if(e.target.checked === true) {
      arr.push(e.target.parentNode.id);
    }else{
      arr.splice(arr.splice(arr.indexOf(e.target.parentNode)))
    }
    console.log(arr,11); 
  }

  const AllRemove = async(e) => {
    try{
      // await axios.delete('http://localhost:3000/api/posts',{
      //   data : arr.map(async ar=>await axios.delete(`http://localhost:3000/api/post/${ar}`))
      // })
      arr.map(async ar=>await axios.delete(`http://localhost:3000/api/post/${ar}`))

      const response = await axios.get('http://localhost:3000/api/posts');
      await ListDispatch({
        type: POST_SUCCESS,
        data: response.data
      })
      // const response = arr.map(async ar=>await axios.delete(`http://localhost:3000/api/post/${ar}`))
      // await ListDispatch({
      //   type: POST_SUCCESS,
      //   data: response.data
      // })

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
