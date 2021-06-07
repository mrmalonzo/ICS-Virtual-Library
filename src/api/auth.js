import { api } from '../utils/api';

export const login = (token) => api.post('/users/login', {token});



