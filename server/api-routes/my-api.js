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
    router.post("/article/newArticle", (req, res)=> {
        //console.log("server recieved the post req, handling...",req.body)
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            htmlContent: req.body.htmlContent,
            date: new Date()
          });
            newArticle.save().then(
            (result) => {
                console.log(result)
                return res.status(200).send()
            },
            (error) => {
                 return res.statues(500).send({ postCreated: false }); 
            },
          );
    });


    router.post('/article/updateArticle', (req, res) => {
        console.log(req.body); //get it
        let articleId = req.body._id;
        let articleHtmlContent = req.body.htmlContent;
        let articleSelectedText = req.body.selectedText
        Article.findOneAndUpdate({_id : articleId}, {htmlContent: articleHtmlContent, selectedText: articleSelectedText}).then(
            (result) => {
                console.log(result)
                return res.status(200).send()
            },
            (error) => {
                 return res.statues(500).send({ postCreated: false }); 
            },
        )
        
    });

    router.use('/allArticles', mongooseCrudify({
        Model: Article
    }));

    
}