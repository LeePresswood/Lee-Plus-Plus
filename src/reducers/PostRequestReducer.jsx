const initialState = {
  header_details : {},
  bodies : [],
  loadedPosts : [],
  loading : false,
};

export default (state = initialState, action) => {
  switch(action.type){
    case "FetchSinglePost":
      return {
        ...state,
        header_details : {},
        bodies : [],
        loading : true
      };
    case "FetchSinglePost_SUCCESS":
      console.dir(action);
  
      return {
        ...state,
        header_details : action.payload.data.header_details,
        bodies : action.payload.data.bodies,
        loading : false
      };
    case "FetchSinglePost_FAILURE":
      return {
        ...state,
        header_details : {},
        bodies : [],
        loading : false
      };
  
    case "FetchMultiPost":
      return {
        ...state,
        loadedPosts : [],
        loading : true
      };
    case "FetchMultiPost_SUCCESS":
      return {
        ...state,
        loadedPosts : action.payload.data,
        loading : false
      };
    case "FetchMultiPost_FAILURE":
      return {
        ...state,
        loadedPosts : [],
        loading : false
      };
    default:
      return state;
  }
}