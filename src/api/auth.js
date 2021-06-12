import { api } from '../utils/api';

export const login = (token) => api.post('/users/login', {token});
export const viewAllUsers = () => api.get('/users/');

export const updateUser = (email) => api.get(`/users/assignRole/${email}`);