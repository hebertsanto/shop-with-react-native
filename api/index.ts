import axios  from "axios";

export const urlBase = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})