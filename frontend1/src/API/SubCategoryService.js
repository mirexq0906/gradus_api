import axios from "axios";
import { addManySubCategory } from "../store/subCategoryReducer";

export function fetchSubCategory(data = {}) {
    return async function (dispatch) {
        const response = await axios.get(process.env.REACT_APP_SERVER + 'sub_categories', { params: data })
        
        dispatch(addManySubCategory(response.data))
    }
}

export async function fetchOneSubCategory(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'sub_categories/' + id)
    return response.data
}
