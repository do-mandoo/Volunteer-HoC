// action type
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_FAIL = 'CANCEL_FAIL';
export const CHANGE_FIELD = 'write/CHANGE_FIELD';
export const AUTHSTATE_INPUT_VALUE = 'AUTHSTATE_INPUT_VALUE';
// initialState
export const PostInitial = {
  posts: {
    title: '',
    body: '',
    companyName: '',
    address: '',
    phoneNumber: '',
    period: '',
    gender: '',
    number: '',
  },
  loading: false,
  error: null,
};
export function PostReducer(state, action) {
  switch (action.type) {
    case AUTHSTATE_INPUT_VALUE:
      return {
        ...state,
        posts: {
          ...state.posts,
          address: action.address,
          companyName: action.companyName,
          phoneNumber: action.phoneNumber,
        },
      };
    case CHANGE_FIELD:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.key]: action.value,
        },
      };
    case POST_SUCCESS:
      return {
        ...state,
      };
    case POST_FAIL:
      return {};
    case CANCEL_SUCCESS:
      return {};
    case CANCEL_FAIL:
      return {};
    default:
      return state;
  }
}
