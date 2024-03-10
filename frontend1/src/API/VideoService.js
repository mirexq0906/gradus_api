import axios from "axios";
import { addManyVideo } from "../store/videoReducer";

export function fetchVideo(data = {}) {
    return async function (dispatch) {
        const response = await axios.get(process.env.REACT_APP_SERVER + 'videos', { params: data })
        dispatch(addManyVideo(response.data))
    }
}

export async function fetchOneVideo(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'videos/' + id)
    return response.data
}