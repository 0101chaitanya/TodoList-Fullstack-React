// apiClient.js
import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": "true"
    },

    // change to your API base URL
    withCredentials: true
});

// Request interceptor: attach auth token, etc.
api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        // Request config error
        return Promise.reject(error);
    }
);

// Response interceptor: handle success + errors globally
api.interceptors.response.use(
    (response) => {
        // Optionally transform response here
        return response;
    },
    async (error) => {

        return Promise.reject(error);
    }
);

export default api;
