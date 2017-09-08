const initialState = {
    title : "Cats"
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "FetchPost":
            return {
                ...state,
                title : 'Loading'
            };
        case "FetchPost_SUCCESS":
            return {
                ...state,
                title : action.payload.data.title
            };
        case "FetchPost_FAILURE":
            return {
                ...state,
                title : "Failed"
            };
        default:
            return state;
    }
}