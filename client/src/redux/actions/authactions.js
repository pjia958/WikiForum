import {
    USER_SIGNUP,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR
} from './action-types'
import {signUp, logIn} from '../../api/authmanagement'


export const userSignup = (userdata) => {
    return (dispatch, getState) => {
        signUp(userdata).then(()=>{
            dispatch({
                type : USER_SIGNUP_SUCCESS,
                //userData : userdata
            })
        }).catch((err)=>{
            dispatch({
                type : USER_SIGNUP_ERROR,
                err : err
            })
        })
    }

}

export const userLogin = (userdata) => {
    return (dispatch, getState) => {
        logIn(userdata).then(()=>{
            dispatch({
                type : USER_LOGIN_SUCCESS,
                userData : userdata
            })
        }).catch((err)=>{
            dispatch({
                type : USER_LOGIN_ERROR,
                err : err
            })
        })
    }
}

export function userSignupError(err) {
    return {
        type: USER_SIGNUP_ERROR,
        err
    }
}

export function userSignupSuccess(user) {
    return {
        type: USER_SIGNUP_SUCCESS,
        user
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