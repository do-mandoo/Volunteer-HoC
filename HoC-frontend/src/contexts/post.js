export const POST_SUCCESS = 'POST_SUCCESS';

export const PostInitial = {
  posts: [],
  loading: false,
  error: null,
};

export const PostReducer = (state, action) => {
  switch (action.type) {
    case POST_SUCCESS:
      return { ...state, posts: action.data };
    default:
      return state;
  }
};
