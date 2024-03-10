import axios from "axios";
import { addManyBanner } from "../store/bannerReducer";

export function fetchBanner() {
    return async function (dispatch) {
        const response = await axios.get(process.env.REACT_APP_SERVER + 'banners')
        dispatch(addManyBanner(response.data))
    }
}
