import axios from 'axios'

const BASE_URL = 'http://localhost:3000/game'

export const getGames = async () => {
    try {
        const response = axios.get(`${BASE_URL}/all`, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        return (await response).data
    }catch (e) {
        console.log(e)
    }
}   