import Joi from 'joi';
// import { getLineInfo } from '../../../node_modules/acorn/dist/acorn';
import Company from '../../models/company';

export const register = async ctx => {
  // Request Body
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required(),
    companyName: Joi.string().required(),
    address: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    position: Joi.string().required(),
  });
  const result = schema.validate(ctx.request.body);
  console.log(result);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  const {
    username,
    password,
    companyName,
    address,
    phoneNumber,
    position,
  } = ctx.request.body;

  try {
    const exists = await Company.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new Company({
      username,
      companyName,
      address,
      phoneNumber,
      position,
    });
    await user.setPassword(password); // 비밀번호 설정
    await user.save(); // 데이터베이스 저장

    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const login = async ctx => {
  console.log(ctx);
  const { username, password } = ctx.request.body;
  console.log(username, password);

  if (username === '' || password === '') {
    ctx.status = 400;
    return;
  }

  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await Company.findByUsername(username);
    console.log('user', user);
    if (!user) {
      ctx.status = 401;
      return;
    }

    const valid = await user.checkPassword(password);

    if (!valid) {
      ctx.status = 401;
      return;
    }

    ctx.body = user.serialize();
    console.log('ctx.body', ctx.body);

    const token = user.generateToken();
    ctx.cookies.set('access_token', token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const check = async ctx => {
  const { user } = ctx.state;
  const users = await Company.findByUsername(user.username);
  const { companyName, address, phoneNumber } = users;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = {
    ...user,
    position: 'company',
    companyName,
    address,
    phoneNumber,
  };
};

export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No content
};
