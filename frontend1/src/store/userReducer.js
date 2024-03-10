const defaultState = {
    auth: false,
    user: {},
    basket: [],
    userBasket: [],
    favorites: [],
    userFavorites: [],
};

const ADD_USER = 'ADD_USER'
const CHANGE_AUTH = 'CHANGE_AUTH'
const ADD_BASKET = 'ADD_BASKET'
const ADD_USER_BASKET = 'ADD_USER_BASKET'
const ADD_FAVORITES = 'ADD_FAVORITES'
const ADD_USER_FAVORITES = 'ADD_USER_FAVORITES'


export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, user: action.payload }
        case CHANGE_AUTH:
            return { ...state, auth: action.payload }
        case ADD_BASKET:
            return { ...state, basket: action.payload }
        case ADD_USER_BASKET:
            return { ...state, userBasket: action.payload }
        case ADD_FAVORITES:
            return { ...state, favorites: action.payload }
        case ADD_USER_FAVORITES:
            return { ...state, userFavorites: action.payload }
        default:
            return state;
    }
};

export const addUser = (payload) => ({ type: ADD_USER, payload })
export const changeAuth = (payload) => ({ type: CHANGE_AUTH, payload })
export const addBasket = (payload) => ({ type: ADD_BASKET, payload })
export const addUserBasket = (payload) => ({ type: ADD_USER_BASKET, payload })
export const addFavorites = (payload) => ({ type: ADD_FAVORITES, payload })
export const addUserFavorites = (payload) => ({ type: ADD_USER_FAVORITES, payload })