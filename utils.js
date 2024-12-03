import axios from 'axios'

const userInfo = axios.create({
    baseURL: 'https://exhibitly-be.onrender.com'
})

const artHarvardApi = axios.create({
    baseURL: 'https://api.harvardartmuseums.org/object'
})

const artCleveApi = axios.create({
    baseURL: 'https://openaccess-api.clevelandart.org/api/artworks/'
})

const apiKey = import.meta.env.VITE_HARVARD_API_KEY

export const loginUser = (user) => {
    return userInfo.post(`api/login`, user)
    .then((response) => {
        return response.data
    }).catch((err) => {
        if(err.response && err.response.data && err.response.data.msg){
            console.error(err.response.data.msg)
            throw err.response.data.msg
        }else{
            console.error(err.message)
            throw {msg: err.message}
        }
    })
}

export const postUser = (user) => {
    return userInfo.post('api/user', user)
    .then((response) => {
        return response.data
    }).catch((error) => {
        console.error("error posting", error)
        throw error
    })
}

export const fetchArtworks1 = (searchTerm) => {
    return artCleveApi.get(`?q=${searchTerm}`)
    .then((response) => {
        return response.data.data
    })
}

export const fetchArtworksbyId = (id) => {
    return artCleveApi.get(`${id}`)
    .then((response) => {
        return response.data.data
    })
}

export const fetchArtworks2 = (searchTerm) => {
    return artHarvardApi.get(`?apikey=${apiKey}&title=${searchTerm}`)
    .then((response) => {
        return response.data.records
    })
    .catch((error) => {
        console.error("Error fetching artworks:", error)
    })
}