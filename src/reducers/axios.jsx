export const LOAD_POST = 'axios/LOAD_POST';
export const LOAD_POST_SUCCESS = 'axios/LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'axios/LOAD_POST_FAILURE';

const initialState = {
    title : "Cats",
    spinning : false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case LOAD_POST:
            return {
                ...state,
                spinning : true
            };
        case LOAD_POST_SUCCESS:
            return {
                ...state,
                title : action.payload.data.title,
                spinning : false
            };
        case LOAD_POST_FAILURE:
            return {
                ...state,
                title : "Failed",
                spinning : false
            };
        default:
            return state;
    }
}

export const loadPost = () =>{
    return {
        type : LOAD_POST,
        payload : {
            request : {
                url : '/'
            }
        }
    }
};