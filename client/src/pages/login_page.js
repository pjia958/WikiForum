import React from 'react'
import Login from '../components/login'
import {Signup} from '../components/signup'
import {Link} from 'react-router-dom'

export default function LoginPage(){
    return (
    <div className="row">
        <div className="col-md-4 col-md-offset-4">
            <Login />
        </div>
        <div>
            {/* <p>${message.error}</p> */}
        </div>
        <div>
            Don't have an account? Click here to sign up.
            <Link to='/signup_page'>Sign Up~</Link>
        </div>
    </div>
    )
}
