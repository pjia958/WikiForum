import bcrypt from 'bcrypt'
const LocalStrategy = require('passport-local').Strategy

// signup and login
export default async function initialize(passport, getUserByEmail) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null){
            return done(null, false, {message: 'No user with such email'})
        }
        
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, {message : 'Password incrrect'})
            }
        } catch(e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({ usernameField : 'email'}, authenticateUser))
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => {})
}