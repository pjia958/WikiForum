import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import apiRoutes from './server/api-routes';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport'
import flash from 'express-flash'
import initialize from './athenConfig'


// Setup Express
// const express = require('express')
const app = express();
const port = process.env.PORT || 10001;

// Setup body-parser
app.use(bodyParser.json({ extended: false }));

// Setup express-session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "pjia958"
}));

// Setup our routes. These will be served as first priority.
// Any request to /api will go through these routes.
// API set correct. try: /api/msg
app.use("/api", apiRoutes);


// Initialize database. When we quit the server, the db connection will close automatically.
mongoose.connect('mongodb://localhost:27017/WikiForumTest', { useNewUrlParser: true }).then(
    () => console.log('Connected to database!'),
    err => console.error(err));

app.use(cors());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~  login ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.use(express.urlencoded({extended : false}))
//this should be in database
//const users = []
// initializePassport(
//     passport, 
//     email => users.find(user => user.email === email)
// )
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
// app.use(seesion({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~  login end ~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// If we're in production...
if (process.env.NODE_ENV === 'production') {
    console.log("Running in production!");

    // Make the "build" folder available statically
    app.use(express.static(path.join(__dirname, "public")));

    // If we don't match ANYTHING else, return client/build/index.html on another GET request.
    // app.get("/", (req, res) => {
    //     // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    //     res.send('hello world')
    // });
}

// Start the server running. Once the server is running, the given function will be called, which will
// log a simple message to the server console. Any console.log() statements in your node.js code
// can be seen in the terminal window used to run the server.
app.listen(port, () => console.log(`App server listening on port ${port}!`));