const defaultState = {
    product: [],
    filter: '',
    filterOption: '',
    maxPriceFilter: 0,
    minPriceFilter: 0,
    productWeek: [],
};

const ADD_MANY_PRODUCT = 'ADD_MANY_PRODUCT'
const ADD_FILTER = 'ADD_FILTER'
const ADD_FILTER_OPTION = 'ADD_FILTER_OPTION'
const ADD_MAX_PRICE_FILTER = 'ADD_MAX_PRICE_FILTER'
const ADD_MIN_PRICE_FILTER = 'ADD_MIN_PRICE_FILTER'
const ADD_PRODUCT_WEEK = 'ADD_PRODUCT_WEEK'
export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_PRODUCT:
            return { ...state, product: action.payload }
        case ADD_FILTER:
            return { ...state, filter: action.payload }
        case ADD_FILTER_OPTION:
            return { ...state, filterOption: action.payload }
        case ADD_MAX_PRICE_FILTER:
            return { ...state, maxPriceFilter: action.payload }
        case ADD_MIN_PRICE_FILTER:
            return { ...state, minPriceFilter: action.payload }
        case ADD_PRODUCT_WEEK:
            return { ...state, productWeek: [...action.payload] }
        default:
            return state;
    } 
};

export const addManyProduct = (payload) => ({ type: ADD_MANY_PRODUCT, payload })
export const addFilter = (payload) => ({ type: ADD_FILTER, payload })
export const addFilterOption = (payload) => ({ type: ADD_FILTER_OPTION, payload })
export const addMaxPriceFilter = (payload) => ({ type: ADD_MAX_PRICE_FILTER, payload })
export const addMinPriceFilter = (payload) => ({ type: ADD_MIN_PRICE_FILTER, payload })
export const addProductsWeek = (payload) => ({ type: ADD_PRODUCT_WEEK, payload })