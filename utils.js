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

export const fetchUsers = () => {
    return userInfo.get(`api/users`)
    .then((response) => {
        return response.data
    })
}

export const postUser = (user) => {
    return userInfo.post('api/users', user)
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