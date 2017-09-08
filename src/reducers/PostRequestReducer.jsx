const initialState = {
    title : "Cats",
    spinning : false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "FetchPost":
            return {
                ...state,
                spinning : true
            };
        case "FetchPost_SUCCESS":
            return {
                ...state,
                title : action.payload.data.title,
                spinning : false
            };
        case "FetchPost_FAILURE":
            return {
                ...state,
                title : "Failed",
                spinning : false
            };
        default:
            return state;
    }
}