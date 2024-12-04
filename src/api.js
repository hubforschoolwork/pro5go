import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend base URL
});

// Example API call to fetch data
export const getTestData = () => API.get('/test');

