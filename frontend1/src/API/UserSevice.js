import axios from "axios";

export async function fetchOneUser() {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'user', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
    return response.data
}