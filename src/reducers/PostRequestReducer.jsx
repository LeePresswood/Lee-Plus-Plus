import actions from "../actions/index";

const initialState = {
  tags : [],
  header_details : {},
  bodies : [],
  loadedPosts : [],
  loading : false,
};

export default (state = initialState, action) => {
  switch(action.type){
    case actions.singlePostRequest:
      return {
        ...state,
        tags : [],
        header_details : {},
        bodies : [],
        loading : true
      };
    case actions.singlePostSuccess:
      return {
        ...state,
        tags : action.payload.data.tags,
        header_details : action.payload.data.header_details,
        bodies : action.payload.data.bodies,
        loading : false
      };
    case actions.singlePostFailure:
      return {
        ...state,
        tags : [],
        header_details : {},
        bodies : [],
        loading : false
      };
    
    case actions.multiPostRequest:
      return {
        ...state,
        loadedPosts : [],
        loading : true
      };
    case actions.multiPostSuccess:
      return {
        ...state,
        loadedPosts : action.payload.data,
        loading : false
      };
    case actions.multiPostFailure:
      return {
        ...state,
        loadedPosts : [],
        loading : false
      };
    default:
      return state;
  }
}