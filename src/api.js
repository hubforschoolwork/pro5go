import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend base URL
});

export const getTestData = () => API.get('/test');
