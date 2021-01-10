import Router from 'koa-router';
import * as companyCtrl from './company.ctrl';
import * as personCtrl from './person.ctrl';

const auth = new Router();

auth.post('/register/company', companyCtrl.register);
auth.post('/login/company', companyCtrl.login);
auth.get('/check/company', companyCtrl.check);
auth.post('/logout/company', companyCtrl.logout);

auth.post('/register/person', personCtrl.register);
auth.post('/login/person', personCtrl.login);
auth.get('/check/person', personCtrl.check);
auth.post('/logout/person', personCtrl.logout);

// auth.post('/register?position=company', authCtrl.register);
// auth.post('/login?position=company', authCtrl.login);
// auth.get('/check?position=company', authCtrl.check);
// auth.post('/logout?position=company', authCtrl.logout);

export default auth;
