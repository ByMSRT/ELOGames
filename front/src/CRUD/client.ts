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
    }catch (e) {
        console.log(e)
    }

}