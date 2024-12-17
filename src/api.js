import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend base URL
});

// Example API call to fetch data
export const getTestData = () => API.get('/test');



// ******************************************************
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getTopics = async () => {
  const response = await axios.get(`${API_BASE_URL}/topics`);
  return response.data;
};

export const getQuestionsByTopic = async (topicId) => {
  const response = await axios.get(`${API_BASE_URL}/questions/${topicId}`);
  return response.data;
};
