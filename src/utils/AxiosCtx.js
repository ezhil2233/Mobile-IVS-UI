import axios from 'axios';

export const axiosAPI = axios.create({
    //baseURL: process.env.API_URL
    baseURL: "http://localhost:8080/api"
});

