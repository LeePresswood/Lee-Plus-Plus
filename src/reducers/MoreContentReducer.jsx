import actions from "../actions/index";

const initialState = {
  moreContent : {},
  loading : false,
};

export default (state = initialState, action) => {
  switch(action.type){
    case actions.moreContentRequest:
      return {
        ...state,
        moreContent : {},
        loading : true
      };
    case actions.moreContentSuccess:
      return {
        ...state,
        moreContent : action.payload.data,
        loading : false
      };
    case actions.moreContentFailure:
      return {
        ...state,
        moreContent : {},
        loading : false
      };
    default:
      return state;
  }
}