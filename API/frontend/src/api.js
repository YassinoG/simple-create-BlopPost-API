import axios from 'axios';

// Configure Axios with the correct base URL
const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Backend endpoint base URL
});

// Add Authorization header to every request if the token exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default API;
