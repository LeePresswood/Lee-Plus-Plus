import actions from "./index";

export const fetchSinglePostAction = (postId = 1) => {
  return {
    types : [actions.singlePostRequest, actions.singlePostSuccess, actions.singlePostFailure],
    payload : {
      request : {
        url : "/posts/" + postId
      }
    }
  };
};

export const fetchMultiPostAction = (page = 1) => {
  return {
    types : [actions.multiPostRequest, actions.multiPostSuccess, actions.multiPostFailure],
    payload : {
      request : {
        url : "/pages/" + page
      }
    }
  };
};
