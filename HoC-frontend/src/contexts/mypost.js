//action
export const CHANGE_LIST = 'CHANGE_LIST';

export const MODIFY_LOADING = 'MODIFY_LOADING';
export const MODIFY_SUCCESS = 'MODIFY_SUCCESS';
export const MODIFY_ERROR = 'MODIFY_ERROR';

export const DELETE_LOADING = 'DELETE_LOADING';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';

//Initial state
export const MyPostInitial = {
  lists:[],
  loading: false,
  error: null
};


//Reducer
export function MyPageReducer(state, action){
  switch(action.type){
    case CHANGE_LIST:
      console.log("리듀서", action.data);
      return{
        ...state,
        lists:action.data,
        loading:false,
        error:null,
      }

    case MODIFY_LOADING : 
    return {
      ...state,
      lists:action.data,
      loading: false,
      error: null,
    }
    case MODIFY_SUCCESS :
    case MODIFY_ERROR :
      return {
        ...state,
        lists:action.lists,
        loading: action.loading,
        error: action.error,
      }

    case DELETE_LOADING :
    case DELETE_SUCCESS : 
    case DELETE_ERROR : 
      return{
        ...state,
        lists: action.lists,
        loading:action.loading,
        error:action.error,
      }
    default : 
      return state;
  }
}
