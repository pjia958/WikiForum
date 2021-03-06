import mongoose from 'mongoose'
import mongooseCrudify from 'mongoose-crudify';
import bcypt from 'bcrypt'
import { useStore } from 'react-redux';
import passport from 'passport'
import initializePassport from '../../athenConfig'
import {User} from '../db/schema'
import session from 'express-session'
import cookieParser from 'cookie-parser'

// let users=[]
// initializePassport(passport, 
//     email => users.find(user=>user.email === email)
// )

var currentUser = {}

export default router => {
    //Auth
    router.post('/auth/signup', async (req, res) => {
        // Console.log('the req body is: ',req.body)
        const {firstName, lastName, email, password} = req.body
        let errors = []
        //validate
        if (!firstName || !lastName || !email || !password) {
            errors.push({ msg: 'Please fill in all fields' })
        }
        // Other validation...
        if (errors.length > 0) {
            //res.redirect('http://localhost:3000/')
        }
        else{
        try{
            const hashedPassword = await bcypt.hash(req.body.password, 10)
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hashedPassword
            });
            newUser.save().then(
            (result) => {
                console.log(result) 
                return res.status(200).send()
            },
            (error) => {
                return res.status(500).send({ postCreated: false }); 
            }
            )
        } catch {
            console.log('issues happen when sign up')
            return res.status(500).send()
        }
    }
    })

    // router.post('/auth/login', passport.authenticate('local', {
    //     successRedirect: 'http://localhost:3000/',
    //     failureRedirect: 'localhost:3000/login_page',
    //     failureFlash: true
    // }))

    router.post('/auth/login', async (req, res) => {
        console.log(req.body)
        var email = req.body.email;
        var password = req.body.password;
        //var hashedPassword = await bcypt.hash(password, 10)
        User.findOne({email: email}, function(err, user){
            if(err) {
                console.log(err);
                return res.status(500).send('logged in');
            }
            if(!user){
                console.log('no such user')
                return res.status(404).send();
            }
        bcypt.compare(password, user.password, function(err, result){
            if(result){
                //console.log('Welcome: ', email)
                currentUser = user;
                // req.session.user = user;
                // console.log('the session is:',req.session);
                // res.cookie("firstName",user.firstName);
                // res.cookie("lastName",user.lastName);
                return res.status(200).send(user)
            }else{
                console.log('wrong password')
            }
        })
    })
    })

    router.post("/auth", (req, res) => {
        res.redirect(302,'/')
    });
    router.get("/auth", (req, res) => {
        console.log('the session is:',req.session)
    });
}
