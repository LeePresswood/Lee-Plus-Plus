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
            console.log(action);
            return {
                ...state,
                title : action.payload.data.title
            };
        case "FetchPost_FAILURE":
            console.log(action);
            return {
                ...state,
                title : "Failed"
            };
        default:
            return state;
    }
}