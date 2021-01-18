// action type 
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAIL = 'POST_FAIL';
export const CANCEL_SUCCESS = 'CANCEL_SUCCESS';
export const CANCEL_FAIL = 'CANCEL_FAIL';

// initialState 
export const WriteInitial = {
  posttitle:'',
  postname:'',
  postaddress:'',
  period: '',
  peoplecount:'',
  gender:'',
  postcontent:'',
};

export function WriteReducer(state, action) {
  switch (action.type) {
    case POST_SUCCESS:
      return {}
    case POST_FAIL:
      return {}
    case CANCEL_SUCCESS:
      return {}
    case CANCEL_FAIL:
      return {}
    default:
      return state
  }
}
