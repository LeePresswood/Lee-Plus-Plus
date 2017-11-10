const initialState = {
  moreContent : {}
};

export default (state = initialState, action) => {
  switch(action.type){
    case "FetchMoreContent":
      return {
        ...state,
        moreContent : {}
      };
    case "FetchMoreContent_SUCCESS":
      return {
        ...state,
        moreContent : action.payload.data
      };
    case "FetchMoreContent_FAILURE":
      return {
        ...state,
        moreContent : {}
      };
    default:
      return state;
  }
}