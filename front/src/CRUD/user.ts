import axios from 'axios'

const BASE_URL = 'http://localhost:3000/user'

export const register = async (email: string , password: string, firstName: string, lastName: string) => {

    const response = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
        firstName,
        lastName
    },
    {
        headers: {
            "Content-Type": "application/json"
        },
    })
    return response.data
    
}

export const login = async (email: string, password: string) => {
    
    await axios.post(`${BASE_URL}/login`, {
        email,
        password
    },
    {
        headers: {
            "Content-Type": "application/json"
        },
    }
    ).then((res) => {
        const token = res.data
        sessionStorage.setItem("tokenSession", token)
    })
    
}

export const logout = () => {
    sessionStorage.removeItem("tokenSession")
}

export const getUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/profile`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("tokenSession")}`
            }
        })
        return response.data
    }catch(err) {
        console.log('error : ', err)
    }
}

export const updateUser = async (firstName: string, lastName: string, email:string, address: string, phone: string) => {

    try {
        const response = await axios.put(`${BASE_URL}/profile`, {
            firstName,
            lastName,
            email,
            address,
            phone
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("tokenSession")}`
            }
        })
        return response.data
    }catch(err) {
        console.log('error : ', err)
    }
}

export const updateUserPassword = async (oldPassword: string, newPassword: string) => {
    try {
        const response = await axios.put(`${BASE_URL}/update/password`, {
            oldPassword,
            newPassword
        },
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("tokenSession")}`
            }
        })
        return response.data
    }catch(err) {
        console.log('error : ', err)
    }
}