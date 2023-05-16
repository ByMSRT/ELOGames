import axios from 'axios'

const BASE_URL = 'http://localhost:3000/invoice'

export const getBills = async () => {
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

export const getDatasetBills = async () => {
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