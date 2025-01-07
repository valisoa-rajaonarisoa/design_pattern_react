import axios from 'axios';

const API_URL = 'http://localhost:4000/categories';

export const fetchCategorie = () => axios.get(API_URL);

export const addCategorie = (categorie) => axios.post(API_URL, categorie);

export const updateCategorie = (id, categorie) => axios.put(`${API_URL}/${id}`, categorie);

export const deleteCategorie = (id) => axios.delete(`${API_URL}/${id}`);
