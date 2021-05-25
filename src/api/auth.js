import { api } from '../utils/api';

export const login = (token) => api.post('/api/login', {token});



