import axios from 'axios';
import { getAuthToken } from 'utils';


export const api = axios.create({

    withCredentials: true,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        
    },
});

api.interceptors.request.use( async config => ({
    ... config,
    headers : {
        ... config.headers,
        'token': getAuthToken(),
    }
}))