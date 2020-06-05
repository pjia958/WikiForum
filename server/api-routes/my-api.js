import { v4 as uuid } from 'uuid';
import bcypt from 'bcrypt'
import { useStore } from 'react-redux';
import passport from 'passport'
import initialize from '../../athenConfig'
import insertArticle from '../controller/articlecontrl'
import {Article, User} from '../db/schema'
import mongoose from 'mongoose'
import mongooseCrudify from 'mongoose-crudify';


//it should be use in database
const users = []


export default router => {
    // test
    router.get("/greeting", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ message: `Hello, world! Unique ID: ${uuid()}` });

    });

    router.post("/calculate", (req, res) => {
        const result = parseInt(req.body.a) + parseInt(req.body.b);
        res.json({ result });
    });
    
    router.post("/article/newArticle", (req, res)=> {
        console.log("server recieved the post req, handling...",req.body)
        //insertArticle is not a function, why? 
        
        //if (req.user) {
        // if (true) {
        //     insertArticle(req.body).then(
        //     (result) => { res.send(Object.assign({}, result._doc, { postCreated: true })); },
        //     (error) => { res.send({ postCreated: false }); }
        //   );
        // } else {
        //   res.send({ postCreated: false });
        // }
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
            date: new Date()
          });
            newArticle.save().then(
            (result) => {console.log(result)},
            (error) => { res.send({ postCreated: false }); }
          );
    });

    router.use('/allArticles', mongooseCrudify({
        Model: Article
    }));

    
}