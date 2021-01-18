import axios from "axios";
import { useContext, useEffect } from "react"
import { withRouter } from "react-router-dom";
import PostList from "../../components/post/PostList";
import { LIST_ERROR, LIST_LOADING, LIST_SUCCESS } from "../../contexts/list";
import { List } from "../../contexts/store";

const ListForm = () => {
  const {ListState, ListDispatch} = useContext(List); //get

  //post
  //비동기 작업
  const fetchList = async () => {
    ListDispatch({type: LIST_LOADING});
    try{
      const response = await axios.get(
        'http://localhost:3000/api/posts',
      );
      ListDispatch({type: LIST_SUCCESS, data:response.data});

      console.log(response.data);
    }catch(e) {
      ListDispatch({type: LIST_ERROR, error: e});
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  const {loading, error, lists} = ListState;
  if (loading) return <div>로딩중임...</div>;
  if (error) return <div>에러가 발생해따리ㅠ</div>;
  if (!lists) return null;

  console.log(ListState.lists,222);

  return <PostList ListState={ListState}/>
  
};

export default withRouter(ListForm);
