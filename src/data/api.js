import { NASA_API_KEY } from "./keys"
const URL = 'https://api.nasa.gov'
const QUERY = '/planetary/apod'

export const getAPOD = async () => {

    const params = {
        api_key: NASA_API_KEY,
    }
    const endpoint = URL + QUERY + '?api_key=' + params.api_key
    const response = await fetch(endpoint)
    return response.data
}