import actions from "../actions/index";

const initialState = {
  moreContent : {}
};

export default (state = initialState, action) => {
  switch(action.type){
    case actions.moreContentRequest:
      return {
        ...state,
        moreContent : {}
      };
    case actions.moreContentSuccess:
      return {
        ...state,
        moreContent : action.payload.data
      };
    case actions.moreContentFailure:
      return {
        ...state,
        moreContent : {}
      };
    default:
      return state;
  }
}