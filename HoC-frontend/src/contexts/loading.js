// action type
export const START_LOADING = 'START_LOADING';
export const FINISH_LOADING = 'FINISH_LOADING';

// initial state
export const LoadingInitial = {};

// reducer
export function LoadingReducer(state, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, action };
    case FINISH_LOADING:
      return { ...state, action };
    default:
      return state;
  }
}
