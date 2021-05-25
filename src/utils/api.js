import axios from 'axios';


export const api = axios.create({

    // baseURL: 'localhost:4000',
    withCredentials: true,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    },
});

