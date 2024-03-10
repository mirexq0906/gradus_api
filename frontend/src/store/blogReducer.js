const defaultState = {
    blog: [],
};

const ADD_MANY_BLOG = 'ADD_MANY_BLOG'
export const blogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_BLOG:
            return { ...state, blog: action.payload }
        default:
            return state;
    }
};

export const addManyBlog = (payload) => ({ type: ADD_MANY_BLOG, payload })