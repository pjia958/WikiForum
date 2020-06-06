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

const updateArticle = (updateContent) => {
  console.log(updateContent);
  
  return fetch(config.serverUrl + "/api/article/updateArticle", {
    
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updateContent)
}).then(
  res => {
    if(res.status === 200){
      alert('Successfully updated!')
      window.location = "http://localhost:3000"
      //return res.json()
    } else {
      alert('Error, try again.')
      window.location = "http://localhost:3000/"
    }
  }
)
}

export {
  postArticleApi,
  postArticle,
  getAllArticle,
  updateArticle
}