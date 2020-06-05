
import {
    USER_SIGNUP,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from './action-types'

export function userSignup(user) {
    return {
        type: USER_SIGNUP,
        user
    }
}

export function userSignupError(err) {
    return {
        type: USER_SIGNUP_ERROR
    }
}

export function userSignupSuccess() {
    return {
        type: USER_SIGNUP_SUCCESS
    }
}

export function userLogin() {
    return {
        type: USER_LOGIN
        //userData
    }
}

export function userLoginSuccess(){
    return {
        type: USER_LOGIN_SUCCESS
        //userData
    }
}
export function userLoginError(err){
    return {
        type: USER_LOGIN_ERROR,
        err
    }
}