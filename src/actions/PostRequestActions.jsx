export const fetchSinglePostAction = () => ({
    type : 'FetchSinglePost',
    payload : {
        request : {
            url : '/1'
        }
    }
});

export const fetchMultiPostAction = () => ({
    type : 'FetchMultiPost',
    payload : {
        request : {
            url : '/'
        }
    }
});
