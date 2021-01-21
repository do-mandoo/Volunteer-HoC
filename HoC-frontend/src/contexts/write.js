// action type
export const POST_SUCCESS = 'POST_SUCCESS';
export const CHANGE_FIELD = 'write/CHANGE_FIELD';
export const AUTHSTATE_INPUT_VALUE = 'AUTHSTATE_INPUT_VALUE';
export const MODIFY_FORM = 'MODIFY_FORM';
// initialState
export const PostInitial = {
  posts: {
    title: '',
    body: '',
    companyName: '',
    address: '',
    phoneNumber: '',
    periodStart: '',
    periodEnd: '',
    timeStart: '',
    timeEnd: '',
    gender: '',
    number: '',
    email: '',
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
          email: action.email,
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
    case MODIFY_FORM:
      return {
        ...state,
        posts: {
          ...state.posts,
          title: action.title,
          body: action.body,
          companyName: action.companyName,
          gender: action.gender,
          address: action.address,
          number: action.number,
          periodStart: action.periodStart,
          periodEnd: action.periodEnd,
          timeStart: action.timeStart,
          timeEnd: action.timeEnd,
          phoneNumber: action.phoneNumber,
        },
      };
    case POST_SUCCESS:
      return {
        ...state,
        ...PostInitial,
      };
    default:
      return state;
  }
}