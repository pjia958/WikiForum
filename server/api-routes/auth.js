import mongoose from 'mongoose'
import mongooseCrudify from 'mongoose-crudify';
import bcypt from 'bcrypt'
import { useStore } from 'react-redux';
import passport from 'passport'
import initialize from '../../athenConfig'
import {User} from '../db/schema'

initialize(
    passport, 
    // email => users.find(user => user.email === email)
)

export default router => {
    //Auth
    router.post('/auth/signup', async (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        console.log('the req body is: ',req.body)
        try{
            const hashedPassword = await bcypt.hash(req.body.password, 10)

            const newUser = new User({
                email: req.body.email,
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                password: hashedPassword
            });
            newUser.save().then(
            (result) => {console.log(result)},
            (error) => { res.send({ postCreated: false }); }
            )
            res.redirect('http://localhost:3000/login_page')
        } catch {
            console.log('issues happen when sign up')
            res.redirect('http://localhost:3000/signup_page')
        }
    })

    router.post('/login', passport.authenticate('local', {
        successRedirect: 'http://localhost:3000/',
        failureRedirect: 'http://localhost:3000/login_page',
        failureFlash: true
    }))

    router.get("/auth", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ message: `Hello, world!` });

    });
    
}
