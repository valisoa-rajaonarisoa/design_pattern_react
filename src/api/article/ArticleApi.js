import axios from 'axios';

const API_URL = 'http://localhost:4000/articles';
// *****************get 
export const fetchArticles = () => axios.get(API_URL);

// *****************post 
export const addArticle = (article) => axios.post(API_URL, article);

// ************update 
export const updateArticle = (id, article) => axios.put(`${API_URL}/${id}`, article);

// ************delete 
export const deleteArticle = (id) => axios.delete(`${API_URL}/${id}`);
