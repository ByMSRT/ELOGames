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

export const getGameById = async (id: string) => {
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


interface IAddGame {
    name: string,
    price: number,
    description: string,
    image: string,
    stock: number,
    type: string,
    maxPlayers?: number,
    minPlayers?: number,
    duration?: string
}
export const addGame = async ({ name, price, description, image, stock, type, maxPlayers, minPlayers, duration }: IAddGame) => {
    try {
        await axios.post(`${BASE_URL}/add`, {
            name,
            price,
            description,
            image,
            stock,
            type,
            maxPlayers,
            minPlayers,
            duration
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        });
    } catch (e) {
        console.log(e)
    }
};

export const editGame = async (props: IAddGame, id: string) => {
    try {
        await axios.put(`${BASE_URL}/update/${id}`, props, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem('tokenSession')}`
            },
        });
    } catch (e) {
        console.log(e)
    }
};

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