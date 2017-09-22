export const fetchSinglePostAction = () => ({
    type : 'FetchSinglePost',
    payload : {
        request : {
            url : '/1'
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
