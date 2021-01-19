// action
export const LIST_LOADING = 'LIST_LOADING';
export const LIST_SUCCESS = 'LIST_SUCCESS';
export const LIST_ERROR = 'LIST_ERROR';

// initialState
export const ListInitial = {
  lists: [],
  loading: false,
  error: null,
}

// reducer 함수
export const ListReducer = (state, action) => {
  switch(action.type) {
    case LIST_LOADING : 
      return {
        ...state,
        lists: [],
        loading: true, //action.loading
        error: null,
      }
    case LIST_SUCCESS :
      return {
        ...state,
        lists : action.data,
        loading : false,
        error : null,
      }
    case LIST_ERROR : 
      return {
        ...state,
        lists : [],
        loading : false,
        error : action.error
      }
    default : 
      return state;
  }
}