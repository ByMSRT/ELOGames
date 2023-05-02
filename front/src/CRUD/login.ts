import axios from 'axios'

const BASE_URL = 'http://localhost:3000/user'

const register = async (email: string , password: string, firstname: string, lastname: string) => {

    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            email,
            password,
            firstname,
            lastname
        },
        {
            headers: {
                "Content-Type": "application/json",
                // 'Access-Control-Allow-Origin': '*',
                // 'Access-Control-Allow-Credentials': true
            },
        })
        console.log(response.data);
        
        return response.data
    }catch(err) {
        console.log('error', err)
    }
    
}


export default register 

// const login = async (email: string, password: string) => {




// }