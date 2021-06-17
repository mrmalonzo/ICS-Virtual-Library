import { api } from '../utils/api';

export const readAllUsers = () => api.get('/users/');

export const updateRole = (user_email) => api.put(`/users/assignRole/${user_email}`); 