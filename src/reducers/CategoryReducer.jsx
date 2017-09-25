const initialState = {
    categories: []
};

export default (state = initialState, action) =>{
    switch(action.type){
        case "FetchCategories":
            return {
                ...state,
                categories: ['Loading']
            };
        case "FetchCategories_SUCCESS":
            return {
                ...state,
                categories: action.payload.data.categories
            };
        case "FetchCategories_FAILURE":
            return {
                ...state,
                categories: ['Failed to Fetch Blog Categories']
            };
        default:
            return state;
    }
}