import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';

export const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

export const post = new Router(); // api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/:id', postsCtrl.remove);

// post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// posts.use('/:id', postsCtrl.getPostById, post.routes());

post.patch('/:id', postsCtrl.update);

// posts.use('/:id', postsCtrl.getPostById, post.routes());

