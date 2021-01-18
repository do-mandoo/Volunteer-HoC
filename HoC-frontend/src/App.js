import './App.css';
import { Route } from 'react-router-dom';
// import Container from './components/common/Container';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import DivisionPage from './pages/DivisionPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import MyPage from './pages/MyPage';
import { Auth, List, Loading } from './contexts/store';
import { useReducer } from 'react';
import { AuthReducer, AuthInitial } from './contexts/auth';
import { LoadingReducer, LoadingInitial } from './contexts/loading';
import FindAddr from './lib/api/AddressApi';
import { PostInitial, PostReducer } from './contexts/post';
import { ListInitial, ListReducer } from './contexts/list';

function App() {
  const [AuthState, AuthDispatch] = useReducer(AuthReducer, AuthInitial);
  const [ListState, ListDispatch] = useReducer(ListReducer, ListInitial);
  const [LoadingState, LoadingDispatch] = useReducer(
    LoadingReducer,
    LoadingInitial
  );

  return (
    <>
      <Loading.Provider value={{ LoadingState, LoadingDispatch }}>
        <Auth.Provider value={{ AuthState, AuthDispatch }}>
          <List.Provider value = {{ ListState, ListDispatch }}>
            <Route path={['/@:username', '/']} component={PostListPage} exact />
            <Route path="/login/company" component={LoginPage} />
            <Route path="/login/person" component={LoginPage} />
            <Route path="/division" component={DivisionPage} />
            <Route path="/register/company" exact component={RegisterPage} />
            <Route path="/register/person" exact component={RegisterPage} />
            <Route path="/write" component={WritePage} />
            <Route path="/page" component={MyPage} />
            <Route path="/@:username/:postId" component={PostPage} />
          </List.Provider>
        </Auth.Provider>
      </Loading.Provider>
    </>
  );
}

export default App;
