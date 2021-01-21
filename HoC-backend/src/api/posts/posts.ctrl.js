import Post from '../../models/post';
// import mongooxse from 'mongoose';
import Joi from 'joi';

// const { ObjectId } = mongoose.Types;

export const checkOwnPost = (ctx, next) => {
  console.log('check', ctx.state);
  const { user, post } = ctx.state;
  if (post.user_id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

// ObjectId를 체크하는 로직
// export const getPostById = async (ctx, next) => {
//   console.log('ctx', ctx);
//   const { id } = ctx.params;
//   if (!ObjectId.isValid(id)) {
//     ctx.status = 400; // Bad Request
//     return;
//   }

//   try {
//     const post = await Post.findById(id);
//     if (!post) {
//       ctx.status = 404;
//       return;
//     }
//     ctx.state.post = post;
//     return next();
//   } catch (e) {
//     ctx.throw(500, e);
//   }
// };

export const write = async ctx => {
  console.log(1);
  const schema = Joi.object().keys({
    // Joi를 통해서 객체가 다음 필드를 가지고 있음을 검증한다.
    title: Joi.string().required(),
    body: Joi.string().required(),
    companyName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    address: Joi.string().required(),
    periodStart: Joi.string().required(),
    periodEnd: Joi.string().required(),
    timeStart: Joi.string().required(),
    timeEnd: Joi.string().required(),
    number: Joi.string().required(),
    gender: Joi.string().required(),
    // tags: Joi.array().items(Joi.string()).required(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const {
    title,
    body,
    companyName,
    phoneNumber,
    address,
    periodStart,
    periodEnd,
    timeStart,
    timeEnd,
    gender,
    number,
    // tags,
  } = ctx.request.body;
  const post = new Post({
    title,
    body,
    companyName,
    address,
    periodStart,
    periodEnd,
    timeStart,
    timeEnd,
    gender,
    phoneNumber,
    number,
    // tags,
    user: ctx.state.user,
  });
  try {
    // save 함수를 실행해야 데이터베이스에 저장
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const list = async ctx => {
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  const { tag, username } = ctx.query;
  const query = {
    ...(username ? { 'user.username': username } : {}),
    // ...getPostById(tag ? { tags: tag } : {}),
  };

  try {
    // exec를 붙여 주어야 서버에 쿼리를 요청한다.
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      // 처음부터 JSON 형태로 조회
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map(post => ({
      ...post,
      body:
        post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const read = async ctx => {
  const { id } = ctx.params;
  try {
    const post = await Post.find({ _id: id }).exec();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
export const remove = async ctx => {
  console.log('ctx', ctx);
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove({ _id: id }).exec();
    ctx.status = 204; // No Content
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const update = async ctx => {
  const { id } = ctx.params;

  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    address: Joi.string(),
    companyName: Joi.string(),
    gender: Joi.string(),
    number: Joi.string(),
    periodStart: Joi.string(),
    periodEnd: Joi.string(),
    timeStart: Joi.string(),
    timeEnd: Joi.string(),
    phoneNumber: Joi.string(),
  });

  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
      // true이면 업데이트된 데이터 반환
      // false이면 업데이트 이전 데이터 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
