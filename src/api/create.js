import { api } from '../utils/api';


export const createBook = (book) => api.post(`/books/`,book);
export const createPublication = (publication) => api.post(`/publications/`,publication);
