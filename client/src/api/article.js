import axios from 'axios';

const postArticleApi = (article) => {
  return axios.post('/api/article/newArticle', article);
};

const postArticle = (article) =>{
  return fetch('/api/article/newArticle', {
    
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
  });
}

export default {
  postArticleApi,
  postArticle
}