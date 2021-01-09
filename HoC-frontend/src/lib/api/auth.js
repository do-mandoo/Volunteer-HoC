import axios from 'axios';
const client = axios.create();

// 로그인
export const login = ({ username, password }) =>
  client.post('/api/auth/login', { username, password });

// 패스워드
export const register = ({ username, password }) =>
  client.post('/api/auth/register', { username, password });

// 로그인 상태 확인
export const check = () => client.get('/api/auth/check');
