// action type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITAILIZE_FORM = 'auth/INITAILIZE_FORM';
export const REGISTER_INFO = 'auth/REGISTER_INFO';

export const CHECK_LOGIN = 'CHECK_LOGIN';
export const FILL_WRITE_INPUT = 'FILL_WRITE_INPUT';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

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
    email: '',
  },
  person: {
    id: '',
    username: '',
    password: '',
    passwordConfirm: '',
    address: '',
    phoneNumber: '',
    email: '',
  },
  login: {
    username: '',
    password: '',
    position: '',
  },
  auth: null,
  authError: null,
};

//Reducer
export function AuthReducer(state, action) {
  // dispatch에서 날린거 받아옴.
  switch (action.type) {
    case CHANGE_FIELD: // 198번 줄, onChange의 이벤트발생했을때
      return {
        [action.form]: {
          //parse[parse.length-1] 이라고 되어있는 것처럼 뒷부분이 company인지, person인지 구별.
          ...state[action.form], // 스프레드문법을 사용해서 초기 state를 복사함.
          [action.key]: action.value,
          position: action.form,
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
    case CHECK_LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          id: action.id,
          username: action.username,
          position: action.position,
          email: action.email,
        },
      };
    case FILL_WRITE_INPUT:
      return {
        ...state,
        company: {
          ...state.company,
          id: action.id,
          username: action.username,
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
    default:
      return state;
  }
}
