import axios from "axios";  
import { addProductsWeek } from "../store/productReducer";

export function fetchProductsWeek() {
    return async function (dispatch) {
        const response = await axios.get( process.env.REACT_APP_SERVER + 'week_products')
        dispatch(addProductsWeek(response.data.data))
    }
}
