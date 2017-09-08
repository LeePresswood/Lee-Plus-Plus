export function fetchPostAction() {
    return dispatch => {
        dispatch({
            type: 'FetchPost',
            payload: {
                request : {
                    url : '/'
                }
            }
        });
    };
}