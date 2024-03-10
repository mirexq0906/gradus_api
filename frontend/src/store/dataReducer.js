const defaultState = {
  admin: false,
};

const IS_ADMIN  = "IS_ADMIN"

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_ADMIN:
      return { ...state, admin: action.payload }
    default:
      return state;
  }
};

export const  isAdmin = (payload) => ({ type: IS_ADMIN, payload })
