import axios from "axios";
import { addManyProduct } from "../store/productReducer";

export function fetchProduct(data = {}) {
    return async function (dispatch) {
        const response = await axios.get(process.env.REACT_APP_SERVER + 'products', { params: data })
        dispatch(addManyProduct(response.data))
    }
}

export async function fetchOneProduct(url) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'products/' + url)
    return response.data
}

export async function fetchRating(data) {
    const response = await axios.post(process.env.REACT_APP_SERVER + 'reviews', data, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
    return response.data
}