import axios from 'axios'

const userInfo = axios.create({
    baseURL: 'https://exhibitly-be.onrender.com'
})

const artApi = axios.create({
    baseURL: ''
})

export const fetchUsers = () => {
    return userInfo.get('api/users')
    .then((response) => {
        return response.data
    })
}

