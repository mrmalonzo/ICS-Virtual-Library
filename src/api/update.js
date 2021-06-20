import { api } from '../utils/api';


export const updateBook = (isbn , body) =>{
	
	return api.put(`/books/${isbn}`, body);  
} 

export const updatePublication = (title, body) =>{
	return api.put(`/publications/${title}`, body);
}