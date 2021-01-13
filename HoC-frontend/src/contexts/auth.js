// action type
export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const INITAILIZE_FORM = 'auth/INITAILIZE_FORM';
export const REGISTER_INFO = 'auth/REGISTER_INFO';

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

export function AuthReducer(state, action) {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
        },
      };
    case REGISTER_INFO:
      return {
        [action.form]: {
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
      return { ...state, authError: null, auth: action.auth };

    case REGISTER_FAIL:
      return { ...state, authError: action.error.response };

    case LOGIN_SUCCESS:
      return { ...state, authError: null, auth: action.auth };

    case LOGIN_FAIL:
      return { ...state, authError: action.error };
    default:
      return state;
  }
}
