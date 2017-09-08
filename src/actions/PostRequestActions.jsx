export function fetchPostAction() {
    return async dispatch => {
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