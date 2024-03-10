import axios from "axios";
import { addManyCategory } from "../store/categoryReducer";

export function fetchCategory() {

    return async function (dispatch) {
        try {
            const response = await axios.get(process.env.REACT_APP_SERVER + 'categories');   
            dispatch(addManyCategory(response.data));
        } catch (error) {
            console.error('Error fetching category:', error);
        }
    };

}

export async function fetchOneCategory(slug) {

    const response = await axios.get(process.env.REACT_APP_SERVER + 'categories/' + slug)
    return response.data.data
    
} 