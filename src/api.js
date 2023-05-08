import axios from 'axios';

const API_BASE_URL = 'http://52.16.53.86:3000';
//const API_BASE_URL = 'http://localhost:3000';

export const getArticles = () => {
  console.log('Calling getArticles API');
  return axios.get(`${API_BASE_URL}`);
};

export const getArticle = (id) => {
  console.log(`Calling getArticle API with id ${id}`);
  return axios.get(`${API_BASE_URL}/articles/${id}`);
};

export const createArticle = (article) => {
  console.log('Calling createArticle API with data:', article);
  return axios.post(`${API_BASE_URL}/articles`, { article });
};

export const updateArticle = (id, article) => {
  console.log(`Calling updateArticle API with id ${id} and data:`, article);
  return axios.put(`${API_BASE_URL}/articles/${id}`, { article });
};

export const deleteArticle = (id) => {
  console.log(`Calling deleteArticle API with id ${id}`);
  return axios.delete(`${API_BASE_URL}/articles/${id}`);
};

export const getPublishedArticles = () => {
  console.log('Calling getPublishedArticles API');
  return axios.get(`${API_BASE_URL}/articles?published=true`);
};
