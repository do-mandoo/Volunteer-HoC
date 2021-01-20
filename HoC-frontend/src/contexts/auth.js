// action type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITAILIZE_FORM = 'auth/INITAILIZE_FORM';
export const REGISTER_INFO = 'auth/REGISTER_INFO';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_SUCCESS ='LOGOUT_SUCCESS'

// initialState
export const AuthInitial = {
  company: {
    id: '',
    username: '',
    password: '',
    passwordConfirm: '',
    companyName: '',
    address: '',
    phoneNumber: '',
  },
  person: {
    id: '',
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
export function AuthReducer(state, action) {   // dispatch에서 날린거 받아옴.
  switch (action.type) { // RegisterForm.js의 
    case CHANGE_FIELD: // 198번 줄, onChange의 이벤트발생했을때
      return {
        [action.form]: {   //parse[parse.length-1] 이라고 되어있는 것처럼 뒷부분이 company인지, person인지 구별.
          ...state[action.form], // 스프레드문법을 사용해서 초기 state를 복사함. 
          [action.key]: action.value,
        },
      };

    case REGISTER_INFO:
      return {
        ...state,
        [action.form]: {
          username: action.id,
          address: action.address,
          phoneNumber: action.phoneNumber,
          companyName: action.companyName,
        },
      };
    case INITAILIZE_FORM:
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
      case LOGOUT_SUCCESS:
        return { ...state,...AuthInitial};
        default:
          return state;
          
  }
}
