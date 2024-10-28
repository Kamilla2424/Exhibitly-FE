import axios from 'axios'

const userInfo = axios.create({
    baseURL: 'https://exhibitly-be.onrender.com'
})

const artChicagoApi = axios.create({
    baseURL: 'https://api.artic.edu/api/v1'
})

const imageChicagoApi  = axios.create({
    baseURL: 'https://www.artic.edu/iiif/2'
})

const artHarvardApi = axios.create({
    baseURL: 'https://api.harvardartmuseums.org'
})

const apiKey = import.meta.env.VITE_HARVARD_API_KEY

export const fetchUsers = () => {
    return userInfo.get(`api/users`)
    .then((response) => {
        return response.data
    })
}

export const postUser = () => {
    return userInfo.post('api/users')
    .then((response) => {
        return response.data
    }).catch((error) => {
        console.error("error posting", error)
        throw error
    })
}

export const fetchArtworks1 = () => {
    return artChicagoApi.get('/artworks?limit=10')
    .then((response) => {
        return response.data.data
    })
}

export const fetchArtworks2 = () => {
    return artHarvardApi.get(`/object?apikey=${apiKey}&size=10`)
    .then((response) => {
        return response.data.records;
    })
    .catch((error) => {
        console.error("Error fetching artworks:", error);
    });
}

export const fetchArtImage = (id) => {
    return imageChicagoApi.get(`/${id}/full/843,/0/default.jpg`)
    .then((response) => {
        return response
    })
}