const defaultState = {
  ModalInfo: { name: false, desc: "" },
  ModalCall: { name: false, desc: "" },
};

const OPEN_INFO = "OPEN_INFO";
const OPEN_CALL = "OPEN_CALL";
const CLOSE_MODAL = "CLOSE_MODAL";

export const modalsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_INFO:
      return { ...state, ModalInfo: action.payload };
    case OPEN_CALL:
      return { ...state, ModalCall: action.payload };
    case CLOSE_MODAL:
      return {
        ...state,
        ModalInfo: { ...state.ModalInfo, name: action.payload },
        ModalCall: { ...state.ModalCall, name: action.payload },
      };
    default:
      return state;
  }
};

export const openInfo = payload => ({ type: OPEN_INFO, payload });
export const openCall = payload => ({ type: OPEN_CALL, payload });
export const closeModal = payload => ({ type: CLOSE_MODAL, payload });