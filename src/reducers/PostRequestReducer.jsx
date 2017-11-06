const initialState = {
  title : "Cats",
  dateTime : "",
  tags : [],
  body : [],
  loading : false,
  loadedPosts : []
};

export default (state = initialState, action) => {
  switch(action.type){
    case "FetchSinglePost":
      return {
        ...state,
        title : "Loading",
        dateTime : "Loading",
        tags : [],
        body : [{ text : "Loading" }],
        loading : true
      };
    case "FetchSinglePost_SUCCESS":
      return {
        ...state,
        title : action.payload.data.title,
        dateTime : action.payload.data.dateTime,
        tags : action.payload.data.tags,
        body : action.payload.data.body,
        loading : false
      };
    case "FetchSinglePost_FAILURE":
      return {
        ...state,
        title : "Failed",
        dateTime : "Failed",
        tags : [],
        body : [{ text : "Failed" }],
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