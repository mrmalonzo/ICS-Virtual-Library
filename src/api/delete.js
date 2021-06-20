import { api } from '../utils/api';

export const deletebook = (ISBN) => api.delete(`/books/${ISBN}`);
export const deletepublication = (title) => api.delete(`/publications/${title}`);