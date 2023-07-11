import { NASA_API_KEY } from "./keys"
const APOD = 'https://api.nasa.gov/planetary/apod?'

export const getAPOD = async () => {

    const params = {
        api_key: NASA_API_KEY,
        count: 3,
    }
    const endpoint = APOD + new URLSearchParams(params)
    const response = await fetch(endpoint)
    if (response.ok) {
        return await response.json()
    }
}

export const getExtraCards = async () => {

    const params = {
        api_key: NASA_API_KEY,
        count: 5,
    }
    const endpoint = APOD + new URLSearchParams(params)
    const response = await fetch(endpoint)
    if (response.ok) {
        return await response.json()
    }
}