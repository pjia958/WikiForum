// const getAllOpinions = require('../opinion/controller').getAllOpinions;
// const getUser = require('../user/controller').getUser;

const Article = require('../db/schema');
// const Opinion = require('../opinion/model');

const insertArticle = (article) => {
    return new Promise((resolve, reject) => {
      const newArticle = new Article({
        title: article.title,
        content: article.content,
        user_id: 1234123,
        user: "Goo",
        date: new Date()
      });
  
      newArticle.save((error) => {
        if (error) {
          console.log(error);
          reject(error);
        }
        resolve(newArticle);
      });
    });
};

export default {
  insertArticle
};