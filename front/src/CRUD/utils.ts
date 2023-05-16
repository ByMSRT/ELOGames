import axios from 'axios'

const BASE_URL = 'http://localhost:3000/client'

const getClients = async () => {

    try {
        const response = await axios.get(`${BASE_URL}/all/`, {
        },
        )
        console.log(response.data);

        return response.data
    } catch (err) {
        console.log('error', err)
    }

}


export default getClients