import {browserhistory} from 'react-router'
import postArticle from '../../api/article'
import config from '../../config'
import {
    LOAD_ARTICLES_LOADING,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_ERROR,
} from './action-types'


export const createArticle = (article) => {
    console.log("create article from actions:", article)
    //console.log('tartget address: '+ config.serverUrl + 'api/article/newArticle')
    return (dispatch, getState) => {
        // halting dispach, make async call to db
        fetch(config.serverUrl + '/api/article/newArticle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...article,
                user_id: '12312312312123',
            })
        }).then(()=>
        {
            dispatch({
                type : 'CREATE_ARTICLE',
                article : article
            })
        }).catch((err)=>{
            dispatch({
                type : 'CREATE_ARTICLE_ERROR',
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