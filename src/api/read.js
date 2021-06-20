import { api } from '../utils/api';

export const readBook = (isbn) => api.get(`/books/${isbn}`);
export const readPublication = (title) => api.get(`/publications/${title}`);
