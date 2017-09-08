import axios from "axios";

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
        
        try{
            const response = await axios('/');
            const data = response.data;
            dispatch({
                type: 'FetchPost_SUCCESS',
                data
            });
        }catch(error){
            dispatch({
                type: 'FetchPost_FAILURE',
                error
            });
        }
    };
}