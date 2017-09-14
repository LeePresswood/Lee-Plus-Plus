const initialState = {
    title : 'Cats',
    subtitle: '',
    dateTime: '',
    body: [],
    loading: false,
    loadedPosts: []
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "FetchSinglePost":
            return {
                ...state,
                title : 'Loading',
                subtitle : 'Loading',
                dateTime : 'Loading',
                body : [{text: 'Loading'}],
                loading: true
            };
        case "FetchSinglePost_SUCCESS":
            return {
                ...state,
                title : action.payload.data.title,
                subtitle : action.payload.data.subtitle,
                dateTime : action.payload.data.dateTime,
                body : action.payload.data.body,
                loading: false
            };
        case "FetchSinglePost_FAILURE":
            return {
                ...state,
                title : "Failed",
                subtitle : "Failed",
                dateTime : "Failed",
                body : [{text: "Failed"}],
                loading: false
            };
        case "FetchMultiPost":
            return {
                ...state,
                loadedPosts: [],
                loading: true
            };
        case "FetchMultiPost_SUCCESS":
            return {
                ...state,
                loadedPosts: action.payload.data,
                loading: false
            };
        case "FetchMultiPost_FAILURE":
            return {
                ...state,
                loadedPosts: [],
                loading: false
            };
        default:
            return state;
    }
}