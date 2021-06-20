import { api } from '../utils/api';

export const getAllBooks = () => api.get('/books/');
export const getAllPublications = () => api.get('/publications/');