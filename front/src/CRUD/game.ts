import axios from 'axios'

const BASE_URL = 'http://localhost:3000/game'

export async function getGames () {
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

export const getDatasetGames = async () => {
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