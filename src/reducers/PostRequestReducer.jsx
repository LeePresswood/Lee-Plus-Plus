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
                subtitle : 'Loading',
                dateTime : 'Loading',
                body : 'Loading',
                loading: true
            };
        case "FetchPost_SUCCESS":
            return {
                ...state,
                title : action.payload.data.title,
                subtitle : action.payload.data.subtitle,
                dateTime : action.payload.data.dateTime,
                body : action.payload.data.body,
                loading: false
            };
        case "FetchPost_FAILURE":
            return {
                ...state,
                title : "Failed",
                subtitle : "Failed",
                dateTime : "Failed",
                body : "Failed",
                loading: false
            };
        default:
            return state;
    }
}