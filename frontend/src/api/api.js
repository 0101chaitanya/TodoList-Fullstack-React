// apiClient.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/',

    headers: {
        "Content-Type": "application/json",
        // "access-control-allow-origin": "*",
        // "access-control-allow-headers": "*",
        // "access-control-allow-methods": "*",
        "access-control-allow-credentials": "true"
    },

    // change to your API base URL
    withCredentials: true
});

// Request interceptor: attach auth token, etc.
api.interceptors.request.use(
    (config) => {
        /*       const token = localStorage.getItem('accessToken'); // or from Redux, Zustand, etc.

               if (token) {
                   config.headers.Authorization = `Bearer ${token}`;
               }*/

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
        // const originalRequest = error.config;

        // Example: handle 401 (unauthorized) in one place
        // if (error.response?.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;

        // TODO: implement your refresh token logic here
        // const refreshToken = localStorage.getItem('refreshToken');
        // const { data } = await axios.post('https://api.example.com/auth/refresh', { refreshToken });
        // localStorage.setItem('accessToken', data.accessToken);
        // originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        // return api(originalRequest); // retry original request

        // For now just clear tokens / redirect
        // localStorage.removeItem('accessToken');
        // window.location.href = '/login';
        // }

        // Handle other status codes globally if you want
        // if (error.response?.status === 500) { ... }

        return Promise.reject(error);
    }
);

export default api;
