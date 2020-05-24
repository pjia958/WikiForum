import createArticle from '../controller/articlecontrl'

// export const ArticleAPI = (app) => {
// app.post('/api/article/newArticle', (req, res) => {
//     if (req.user) {
//         createArticle(req.body).then(
//         (result) => { res.send(Object.assign({}, result._doc, { postCreated: true })); },
//         (error) => { res.send({ postCreated: false }); }
//       );
//     } else {
//       res.send({ postCreated: false });
//     }
//   });
// }