export const POST_SUCCESS ='POST_SUCCESS';
export const POST_FAIL ='POST_FAIL';
export const POST_LOADING ='POST_LOADING';

export const ListInitial = {
    lists:[],
    loading: false,
    error: null
};

export const ListReducer = (state,action) => {
    console.log(action);
    // console.log(address);
    switch (action.type) {
        case POST_SUCCESS:
          return {
              ...state,
              lists:action.data,
              loading:false,
              error:null
            }
            
        case POST_LOADING:
            return {
                ...state,
                lists:[],
                loading:true,
                error:null
            }
        case POST_FAIL:
            return{
                ...state,
                lists:[],
                loading:false,
                error:action.error
            }
        default:
            return state;   
    }

};