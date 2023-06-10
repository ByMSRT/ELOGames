import axios from 'axios'

const BASE_URL = 'http://localhost:3000/game'

export async function getGames () {
    try {
        const response = await axios.get(`${BASE_URL}/all`, {
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response.data
    }catch (e) {
        console.log(e)
    }
}   