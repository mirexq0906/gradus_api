const defaultState = {
    video: [],
};

const ADD_MANY_VIDEO = 'ADD_MANY_VIDEO'
export const videoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_VIDEO:
            return { ...state, video: action.payload }
        default:
            return state;
    }
};

export const addManyVideo = (payload) => ({ type: ADD_MANY_VIDEO, payload })