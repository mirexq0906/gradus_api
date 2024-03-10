import axios from "axios";
import { addBasket } from "../store/userReducer";

export function fetchBasket(id) {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:5000/api/basket/' + id)
        dispatch(addBasket(response.data))
    }
}

