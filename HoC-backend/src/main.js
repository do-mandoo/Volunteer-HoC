require('dotenv').config();
import Koa from 'koa';
// import cors from 'cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// mongoose를 사용해서 서버와 데이터를 연결
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(e => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// app.use(cors());

router.use('/api', api.routes());

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(4000, () => {
  console.log('Listening to port %d', port);
});
