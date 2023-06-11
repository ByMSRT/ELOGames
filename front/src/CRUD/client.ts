import axios from 'axios'

const BASE_URL = 'http://localhost:3000/client'


export const getInvoicesByClient = async (id: string) => {

    try {
        const response = await axios.get(`${BASE_URL}/invoice/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("tokenSession")}`
            },
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/all`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getClientById = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}


interface IAddClient {
    firstName: string,
    lastName: string,
    email: string,
    address?: string,
    phone: string,
}

export const addClient = async (props: IAddClient) => {
    try {
        await axios.post(`${BASE_URL}/add`, props, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        });
    } catch (e) {
        console.log(e)
    }
}

export const updateClient = async (props: IAddClient, id: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/${id}`, props, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getDatasetClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/dataset`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        return response.data
    } catch (e) {
        console.log(e)
    }
}