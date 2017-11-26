export const fetchSinglePostAction = (postId = 1) => ({
    type : 'FetchSinglePost',
    payload : {
        request : {
            url : '/posts/' + postId
        }
    }
});

export const fetchMultiPostAction = (page = 1) => ({
    type : 'FetchMultiPost',
    payload : {
        request : {
            url : '/pages/' + page
        }
    }
});
