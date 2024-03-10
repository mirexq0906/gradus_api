import axios from "axios";


export async function fetchOrders() {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'orders', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    return response.data
}

export async function fetchKitOrders() {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'kit_orders', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
    return response.data
}

export async function fetchOneKitOrder(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'kit_orders/' + id, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    return response.data
}

export async function fetchUserOrder(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'orders/' + id, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    return response.data
}

export async function fetchOneOrder(id) {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'orders/' + id, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
    return response.data
}