import { api } from '../utils/api';

export const searchAll = (words) => api.get(`/search/all/${words}`);
export const searchBooks = (words) => api.get(`/search/books/${words}`);
export const searchPublications = (words) => api.get(`/search/pubs/${words}`);



export const updateRole = (email) => api.put('/user/assignRole', {user_email: email});
