import axios from 'axios'

export const getData2 = async () => {
    try {
        const fetchApi2 = await axios.get("https://jsonplaceholder.typicode.com/todos/")
        const resposta2 = fetchApi2.data

        return resposta2

    } catch (error) {
        throw error
    }
}