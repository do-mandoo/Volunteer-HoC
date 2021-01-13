// action type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITAILIZE_FORM = 'auth/INITAILIZE_FORM';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

// initialState
export const AuthInitial = {
  company: {
    username: '',
    password: '',
    passwordConfirm: '',
    companyName: '',
    address: '',
    phoneNumber: '',
  },
  person: {
    username: '',
    password: '',
    passwordConfirm: '',
    address: '',
    phoneNumber: '',
  },
  login: {
    username: '',
    password: '',
  },
  auth: null,
  authError: null,
};

//Reducer
export function AuthReducer(state, action) {
  switch (action.type) { // RegisterForm.js의 
    case CHANGE_FIELD: // 198번 줄, onChange의 이벤트발생했을때
      return {
        [action.form]: {   //parse[parse.length-1] 이라고 되어있는 것처럼 뒷부분이 company인지, person인지 구별.
          ...state[action.form], // 스프레드문법을 사용해서 초기 state를 복사함. 
          [action.key]: action.value,
        },
      };
    case INITAILIZE_FORM: // 초기설정 값.
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return { ...state, authError: null, auth: action.auth }; // auth: action.auth === 153번 줄 auth:response.

    case REGISTER_FAIL:
      return { ...state, authError: action.error.response }; // authError: action.error.response === 

    case LOGIN_SUCCESS:
      return { ...state, authError: null, auth: action.auth };

    case LOGIN_FAIL:
      return { ...state, authError: action.error };
    default:
      return state;
  }
}
