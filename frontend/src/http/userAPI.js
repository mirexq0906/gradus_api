import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

export const registration = async (name, email, password) => {
    const response = await $host.post('/register', { name, email, password })

    return response.data
}

export const login = async (email, password) => {
    const response = await $host.post('/login', { email, password } )
    // if (!response.token) {
    //     return response
    // }
    localStorage.setItem('token', response.data.data.token)
    return response.data
}

export const logout = async () => {
    const response = await $host.post('/logout', {},  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})

    return response.data
}



export const check = async () => {
    // const response = await $host.get('/user', {},  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})

    // return response.data
}