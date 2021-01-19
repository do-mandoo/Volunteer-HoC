import Router from 'koa-router';
import {post, posts} from './posts';
import auth from './auth';

const api = new Router();

api.use('/post', post.routes());
api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

export default api;
