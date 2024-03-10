const defaultState = {
    subCategory: [],
};

const ADD_MANY_SUBCATEGORY = 'ADD_MANY_SUBCATEGORY'
export const subCategoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_SUBCATEGORY:
            return { ...state, subCategory: action.payload }
        default:
            return state;
    }
};

export const addManySubCategory = (payload) => ({ type: ADD_MANY_SUBCATEGORY, payload })