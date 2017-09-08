const initialState = {
    title : 'Cats',
    subtitle: '',
    dateTime: '',
    body: '',
    loading: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "FetchPost":
            return {
                ...state,
                title : 'Loading',
                loading: true
            };
        case "FetchPost_SUCCESS":
            return {
                ...state,
                title : action.payload.data.title,
                loading: false
            };
        case "FetchPost_FAILURE":
            return {
                ...state,
                title : "Failed",
                loading: false
            };
        default:
            return state;
    }
}