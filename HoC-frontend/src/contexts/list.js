//get 해온거 state로 관리.

// createContext해야겟쥬?
// 담으려고하는 상ㅌ애의 초기값과 디스패치 릳슈서함수만들어
// useReducer로 뽑아내고 provider로 내려줘

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
