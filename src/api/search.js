import { api } from '../utils/api';

export const search = (words) => api.get(`/search/all/${words}`);
export const search_books = (words) => api.get(`/search/all/${words}`);

export const updateRole = (email) => api.put('/user/assignRole', {user_email: email});
