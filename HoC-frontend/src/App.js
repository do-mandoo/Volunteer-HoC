import './App.css';
import { Route } from 'react-router-dom';
import Container from './components/common/Container';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import DivisionPage from './pages/DivisionPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Auth, Loading } from './contexts/store';
import { useReducer } from 'react';
import { AuthReducer, AuthInitial } from './contexts/auth';
import { LoadingReducer, LoadingInitial } from './contexts/loading';

function App() {
  return (
    <>
      <Route path={['/@:username', '/']} component={PostListPage} exact />
      <Route path="/login/company" component={LoginPage} />
      <Route path="/login/person" component={LoginPage} />
      <Route path="/division" component={DivisionPage} />
      <Route path="/register/company" exact component={RegisterPage} />
      <Route path="/register/person" exact component={RegisterPage} />
      <Route path="/write" component={WritePage} />
      <Route path="/@:username/:postId" component={PostPage} />
    </>
  );
}

export default App;
