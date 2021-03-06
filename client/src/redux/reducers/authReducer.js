import {    
    USER_SIGNUP,
    USER_SIGNUP_ERROR,
    USER_SIGNUP_SUCCESS,
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_ERROR 
} from '../actions/action-types'

const initState = {
    authInfo : {
        isEmpty: false,
        isLoaded: false
    },
    userData : 'someone'
}

const authReducer = (state = [], action) => {
    //manipulate the state
    switch(action.type) {
        case USER_SIGNUP:
            return auth_UserSignUp(state, action);
        case USER_SIGNUP_ERROR:
            return auth_UserSignUpError(state, action);
        case USER_SIGNUP_SUCCESS:
            return auth_UserSignUpSuccess(state, action);
        case USER_LOGIN:
            return auth_UserLogin(state, action);
        case USER_LOGIN_SUCCESS:
            return auth_UserLoginSucess(state, action);
        case USER_LOGIN_ERROR:
            return auth_UserLoginError(state, action)
        default:
            return state;
    }
}

export default authReducer

function auth_UserSignUp(state, action){
    console.log(action.user)
    return state
}

function auth_UserSignUpError(state, action){
    return state
}

function auth_UserSignUpSuccess(state, action){
    console.log('user+1:',action)
    console.log('state:',state)
    return state
}

function auth_UserLogin(state, action){
    console.log(action)
    return state
}

function auth_UserLoginError(state, action){
    return state
}

function auth_UserLoginSucess(state, action){
    return state
}