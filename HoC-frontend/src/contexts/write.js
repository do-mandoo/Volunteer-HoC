// action type
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_FAIL = 'CANCEL_FAIL';
export const CHANGE_FIELD = 'write/CHANGE_FIELD';
export const AUTHSTATE_INPUT_VALUE = 'AUTHSTATE_INPUT_VALUE';
export const POSTSTATE_INPUT_VALUE = 'POSTSTATE_INPUT_VALUE';
export const INITAILIZE_FORM = 'write/INITAILIZE_FORM';



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
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case AUTHSTATE_INPUT_VALUE:
      // console.log(action);
      return {
        ...state,
        posts: {
          ...state.posts,
          address: action.address,
          companyName: action.companyName,
          phoneNumber: action.phoneNumber,
         email:action.email,
          
        },
      };
      case POSTSTATE_INPUT_VALUE:
      return {
        ...state,
        posts: {
          ...state.posts,
          body: action.body,
          companyName: action.companyName,
          gender: action.gender,
          number: action.number,
          periodEnd: action.periodEnd,
          periodStart: action.periodStart,
          phoneNumber: action.phoneNumber,
          timeEnd: action.timeEnd,
          timeStart: action.timeStart,
          title: action.title,
          address: action.address,
        }
      }
    case CHANGE_FIELD:
      // console.log(action);
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.key]: action.value,
        },
      };
    case INITAILIZE_FORM:
      // console.log(PostInitial.posts);
      return {
        ...state,
        posts: {
          // ...state.posts,
          ...PostInitial.posts
        }
      }
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
