export const fetchCategoriesAction = () => ({
    type : 'FetchCategories',
    payload : {
        request : {
            url : '/categories'
        }
    }
});