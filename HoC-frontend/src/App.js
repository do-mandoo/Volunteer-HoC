import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from './components/common/Container';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import DivisionPage from './pages/DivisionPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import UserApplyPage from './pages/UserApplyPage';
import { Auth, Loading, Post, List } from './contexts/store';
import { useReducer } from 'react';
import { AuthReducer, AuthInitial } from './contexts/auth';
import { LoadingReducer, LoadingInitial } from './contexts/loading';
import FindAddr from './lib/api/AddressApi';
import MyPage from './pages/MyPage';
import { PostInitial, PostReducer } from './contexts/write';
import { ListInitial, ListReducer } from './contexts/list';
function App() {
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, AuthInitial);

  const [PostState, PostDispatch] = useReducer(PostReducer, PostInitial);
  // const [LoadingState, LoadingDispatch] = useReducer(
  //   LoadingReducer,
  //   LoadingInitial
  // );
  const [ListState, ListDispatch] = useReducer(ListReducer, ListInitial);

  return (
    <>
      <Post.Provider value={{ PostState, PostDispatch }}>
        <Auth.Provider value={{ AuthState, AuthDispatch }}>
          <List.Provider value={{ ListState, ListDispatch }}>
<<<<<<< HEAD
            <Post.Provider value={{PostState, PostDispatch}}>
              <Route path={['/@:username', '/']} component={PostListPage} exact />
              <Route path="/login/company" component={LoginPage} />
              <Route path="/login/person" component={LoginPage} />
              <Route path={['/register', '/login']} component={DivisionPage} />
              <Route path="/register/company" exact component={RegisterPage} />
              <Route path="/register/person" exact component={RegisterPage} />
              <Route path="/write" component={WritePage} />
              <Route path="/mypage" component={MyPage} />
              <Route path="/address" component={FindAddr} />
              <Route path="/@:username/:postId" component={UserApplyPage} />
            </Post.Provider>
=======
            <Switch>
              <Route path="/login/company" component={LoginPage} />
              <Route path="/login/person" component={LoginPage} />
              <Route path="/register/person" component={RegisterPage} />
              <Route path="/register/company" component={RegisterPage} />
              <Route path="/login" component={DivisionPage} />
              <Route path="/register" exact component={DivisionPage} />
              <Route path="/write" component={WritePage} />
              <Route path="/mypage" component={MyPage} />
              <Route path="/:postId" component={UserApplyPage} />
              <Route path="/address" component={FindAddr} />
              <Route path="/" component={PostListPage} exact />
            </Switch>
>>>>>>> a2caf8d6b772fd3dc65db360def45c048b2b13b3
          </List.Provider>
        </Auth.Provider>
      </Post.Provider>
    </>
  );
}

export default App;
