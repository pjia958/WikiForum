import axios from 'axios';
import config from '../config'

const postArticleApi = (article) => {
  return axios.post('/api/article/newArticle', article);
};

const postArticle = (article) => {
  return fetch('/api/article/newArticle', {
    
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
  });
}
 
const getAllArticle = () => {
  return fetch(config.serverUrl + "/api/allArticles").then(res => res.json());
}

export {
  postArticleApi,
  postArticle,
  getAllArticle
}