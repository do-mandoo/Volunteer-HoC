import Router from 'koa-router';
import * as companyCtrl from './company.ctrl';

const auth = new Router();

auth.post('/register/company', companyCtrl.register);
auth.post('/login/company', companyCtrl.login);
auth.get('/check/company', companyCtrl.check);
auth.post('/logout/company', companyCtrl.logout);

// auth.post('/register?position=company', authCtrl.register);
// auth.post('/login?position=company', authCtrl.login);
// auth.get('/check?position=company', authCtrl.check);
// auth.post('/logout?position=company', authCtrl.logout);

export default auth;
