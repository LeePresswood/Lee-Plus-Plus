export const fetchSinglePostAction = (postId) => ({
    type : 'FetchSinglePost',
    payload : {
        request : {
            url : '/posts/' + postId
        }
    }
});

export const fetchMultiPostAction = (page = 0) => ({
    type : 'FetchMultiPost',
    payload : {
        request : {
            url : '/pages/' + page
        }
    }
});
