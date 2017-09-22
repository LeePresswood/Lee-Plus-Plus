export const fetchSinglePostAction = (postId) => ({
    type : 'FetchSinglePost',
    payload : {
        request : {
            url : '/' + postId
        }
    }
});

export const fetchMultiPostAction = (page = 0) => ({
    type : 'FetchMultiPost',
    payload : {
        request : {
            url : '/page/' + page
        }
    }
});
