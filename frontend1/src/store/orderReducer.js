const defaultState = {
    order: {
        products: [],
        status: "В ожидании",
        phone: "",
        fullName: "",
        email: "",
        adress: "",
        payment: "",
        delivery: "",
    },
};

const ADD_ORDER_PRODUCTS = 'ADD_ORDER_PRODUCTS'
const ADD_ORDER_STATUS = 'ADD_ORDER_STATUS'
const ADD_ORDER_NUMBER = 'ADD_ORDER_NUMBER'
const ADD_ORDER_PHONE = 'ADD_ORDER_PHONE'
const ADD_ORDER_FULLNAME = 'ADD_ORDER_FULLNAME'
const ADD_ORDER_EMAIL = 'ADD_ORDER_EMAIL'
const ADD_ORDER_ADRESS = 'ADD_ORDER_ADRESS'
const ADD_ORDER_PAYMENT = 'ADD_ORDER_PAYMENT'
const ADD_ORDER_DELIVERY = 'ADD_ORDER_DELIVERY'
const ADD_ORDER_TOTALPRICE = 'ADD_ORDER_TOTALPRICE'

export const orderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ORDER_PRODUCTS:
            return { ...state, order: { ...state.order, products: action.payload } }
        case ADD_ORDER_STATUS:
            return { ...state, order: { ...state.order, status: action.payload } }
        case ADD_ORDER_NUMBER:
            return { ...state, order: { ...state.order, number: action.payload } }
        case ADD_ORDER_PHONE:
            return { ...state, order: { ...state.order, phone: action.payload } }
        case ADD_ORDER_FULLNAME:
            return { ...state, order: { ...state.order, fullName: action.payload } }
        case ADD_ORDER_EMAIL:
            return { ...state, order: { ...state.order, email: action.payload } }
        case ADD_ORDER_ADRESS:
            return { ...state, order: { ...state.order, adress: action.payload } }
        case ADD_ORDER_PAYMENT:
            return { ...state, order: { ...state.order, payment: action.payload } }
        case ADD_ORDER_DELIVERY:
            return { ...state, order: { ...state.order, delivery: action.payload } }
        case ADD_ORDER_TOTALPRICE:
            return { ...state, order: { ...state.order, totalPrice: action.payload } }
        default:
            return state;
    }
};

export const addOrderProduct = (payload) => ({ type: ADD_ORDER_PRODUCTS, payload })
export const addOrderStatus = (payload) => ({ type: ADD_ORDER_STATUS, payload })
export const addOrderNumber = (payload) => ({ type: ADD_ORDER_NUMBER, payload })
export const addOrderPhone = (payload) => ({ type: ADD_ORDER_PHONE, payload })
export const addOrderFullName = (payload) => ({ type: ADD_ORDER_FULLNAME, payload })
export const addOrderEmail = (payload) => ({ type: ADD_ORDER_EMAIL, payload })
export const addOrderAdress = (payload) => ({ type: ADD_ORDER_ADRESS, payload })
export const addOrderPayment = (payload) => ({ type: ADD_ORDER_PAYMENT, payload })
export const addOrderDelivery = (payload) => ({ type: ADD_ORDER_DELIVERY, payload })
export const addOrderTotalPrice = (payload) => ({ type: ADD_ORDER_TOTALPRICE, payload })