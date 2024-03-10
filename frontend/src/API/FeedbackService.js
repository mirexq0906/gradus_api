import axios from "axios";


export async function fetchCall() {
    const response = await axios.get(process.env.REACT_APP_SERVER + 'call_clients')
    return response.data
}

export async function fetchEmails() {
    const response = await axios.get(process.env.REACT_APP_SERVER +'email_clients')
    return response.data
}

