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
        case "FetchPost":
            return {
                ...state,
                loadedPosts: []
                // title : 'Loading',
                // subtitle : 'Loading',
                // dateTime : 'Loading',
                // body : [{text: 'Loading'}],
                // loading: true
            };
        case "FetchPost_SUCCESS":
            return {
                ...state,
                loadedPosts: action.payload.data
                // title : action.payload.data.title,
                // subtitle : action.payload.data.subtitle,
                // dateTime : action.payload.data.dateTime,
                // body : action.payload.data.body,
                // loading: false
            };
        case "FetchPost_FAILURE":
            return {
                ...state,
                loadedPosts: []
                // title : "Failed",
                // subtitle : "Failed",
                // dateTime : "Failed",
                // body : [{text: "Failed"}],
                // loading: false
            };
        default:
            return state;
    }
}