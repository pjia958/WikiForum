import {browserhistory} from 'react-router'
// import {
//     POSTING_ARTICLE_START,
//     POSTING_ARTICLE_END,
//     POSTING_ARTICLE_SUCCESS,
//     POSTING_ARTICLE_FAILURE,
// } from './action-types'
//import { Article } from '../../../../server/db/schema'
import postArticle from '../../api/article'
// import { postDiscussionApi } from './api';

export const createArticle = (article) => {
    console.log("create article from actions:", article)
    return (dispatch, getState) => {
        // halting dispach, make async call to db
        fetch('http://localhost:10001/api/article/newArticle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
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