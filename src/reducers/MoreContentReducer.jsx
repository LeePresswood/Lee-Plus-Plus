const initialState = {
  tags : []
};

export default (state = initialState, action) => {
  switch(action.type){
    case "FetchMoreContent":
      return {
        ...state,
        tags : ["Loading"]
      };
    case "FetchMoreContent_SUCCESS":
      return {
        ...state,
        tags : action.payload.data
      };
    case "FetchMoreContent_FAILURE":
      return {
        ...state,
        tags : ["Failed to Fetch More Content"]
      };
    default:
      return state;
  }
}