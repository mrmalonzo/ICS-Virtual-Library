import { api } from '../utils/api';

export const login = (token) => api.post('/users/login', {token});
export const viewAllUsers = () => api.get('/users/');

export const getSummaryReport = () => api.get('/summary/summary-report');