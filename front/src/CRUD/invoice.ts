import axios from 'axios'

const BASE_URL = 'http://localhost:3000/invoice'

export const getInvoices = async () => {
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

export const getInvoiceById = async (id: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        console.log("getInvoiceById", response)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

interface IAddInvoice {
    paid: boolean,
    client: string,
    billingAddress: string,
    shippingAddress: string,
    games: {
        id: string,
        quantity: number
    }[]
}

export const addInvoice = async (props: IAddInvoice) => {
    try {
        await axios.post(`${BASE_URL}/add`, props, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
    } catch (e) {
        console.log(e)
    }
};

interface IEditInvoice {
    paid: boolean,
    client: string,
    billingAddress: string,
    shippingAddress: string,
};

export const editInvoice = async (props: IEditInvoice, id: string) => {
    try {
        await axios.put(`${BASE_URL}/update/${id}`, props, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
    } catch (e) {
        console.log(e)
    }
};

export const getDatasetInvoices = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/dataset`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        })
        console.log("getDatasetInvoices", response);

        return response.data
    } catch (e) {
        console.log(e)
    }
}