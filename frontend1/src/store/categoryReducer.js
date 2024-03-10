const defaultState = {
    category: [],
};

const ADD_MANY_CATEGORY = 'ADD_MANY_CATEGORY'
export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CATEGORY:
            return { ...state, category: action.payload }
        default:
            return state;
    }
};

export const addManyCategory = (payload) => ({ type: ADD_MANY_CATEGORY, payload })
