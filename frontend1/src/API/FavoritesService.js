import axios from "axios";
import { addFavorites } from "../store/userReducer";

export function fetchFavorites(id) {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:5000/api/favorites/' + id)
        dispatch(addFavorites(response.data))
    }
}
