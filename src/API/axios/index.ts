import axios from "axios";

export const API_URL = 'https://jsonplaceholder.typicode.com/'

const $api = axios.create({
   baseURL: API_URL
})

export default $api