const defaultState = {
    banner: [],
};

const ADD_MANY_BANNER = 'ADD_MANY_BANNER'
export const bannerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_BANNER:
            return { ...state, banner: action.payload }
        default:
            return state;
    }
};

export const addManyBanner = (payload) => ({ type: ADD_MANY_BANNER, payload })