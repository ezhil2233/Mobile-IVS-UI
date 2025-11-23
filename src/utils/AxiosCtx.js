import axios from 'axios';

export const axiosAPI = axios.create({
    baseURL: process.env.API_URL
});

