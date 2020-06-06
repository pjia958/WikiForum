import {browserhistory} from 'react-router'
import postArticle from '../../api/article'
import config from '../../config'
import {
    LOAD_ARTICLES_LOADING,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_ERROR,
    CREATE_ARTICLE,
    CREATE_ARTICLE_ERROR
} from './action-types'


export const createArticle = (article) => {
    //console.log("create article from actions:", article)
    return (dispatch, getState) => {
        // halting dispach, make async call to db
        fetch(config.serverUrl + '/api/article/newArticle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...article,
            })
        }).then(()=>
        {
            dispatch({
                type : CREATE_ARTICLE,
                article : article
            })
            window.location = "http://localhost:3000"
        }).catch((err)=>{
            window.location = "http://localhost:3000"
            dispatch({
                type : CREATE_ARTICLE_ERROR,
                err : err       
            })
        })
    }
}

export function loadArticlesLoading() {
    return {
        type: LOAD_ARTICLES_LOADING
    }
}

export function loadArticlesSuccess(articles) {
    return {
        type: LOAD_ARTICLES_SUCCESS,
        articles
    }
}

export function loadArticlesError(err) {
    return {
        type: LOAD_ARTICLES_ERROR,
        err
    }
}