import Joi from 'joi';
// import { getLineInfo } from '../../../node_modules/acorn/dist/acorn';
import Person from '../../models/person';

export const register = async ctx => {
  // Request Body
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required(),
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
    address,
    phoneNumber,
    position,
    email,
  } = ctx.request.body;

  try {
    const exists = await Person.findByUsername(username);
    if (exists) {
      ctx.status = 409; // Conflict
      return;
    }

    const user = new Person({
      username,
      address,
      phoneNumber,
      position,
      email,
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
    const user = await Person.findByUsername(username);

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
  const users = await Person.findByUsername(user.username);
  const { address, phoneNumber, email } = users;
  if (!user) {
    ctx.status = 401;
    return;
  }
  ctx.body = { ...user, position: 'person', address, phoneNumber, email };
};

export const logout = async ctx => {
  ctx.cookies.set('access_token');
  ctx.status = 204; // No content
};
