import actions from "./index";

export const fetchMoreContentAction = () => {
  return {
    types : [actions.moreContentRequest, actions.moreContentSuccess, actions.moreContentFailure],
    payload : {
      request : {
        url : "/moreContent"
      }
    }
  };
};