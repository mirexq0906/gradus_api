import axios from "axios";
import { addManyBlog } from "../store/blogReducer";

export function fetchBlog(data = {}) {
    return async function (dispatch) {
        const response = await axios.get(process.env.REACT_APP_SERVER + 'blogs', { params: data })
        dispatch(addManyBlog(response.data.data))
    }
}

export async function fetchOneBlog(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'blogs/' + id)
    return response.data.data
}

export async function fetchOneBlogSlug(slug) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'blogs/' + slug)
    return response.data
}