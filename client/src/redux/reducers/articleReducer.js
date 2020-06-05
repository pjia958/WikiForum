import {getAllArticle} from '../../api/article'
import { LOAD_ARTICLES_LOADING, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR } from '../actions/action-types';

//dummy data
// const initState = 
// {
//     articles: [
//     //     {id: '1', title: 'Article 1 from reducer', content:'1 nice little apple'},
//     //     {id: '2', title: 'Article 2 from reducer', content:'2 nice little apple'},
//     //     {id: '3', title: 'Article 3 from reducer', content:'3 nice little apple'},
//     ]
// }

const articleReducer = (state = [], action) => {
    //manipulate the state
    switch(action.type) {
        case 'CREATE_ARTICLE':
            return state;
        case 'CREATE_ARTICLE_ERROR':
            return state;
        case LOAD_ARTICLES_LOADING:
            return articles_LoadArticlesLoading(state, action);
        case LOAD_ARTICLES_SUCCESS:
            return articles_LoadArticlesSuccess(state, action);
        case LOAD_ARTICLES_ERROR:
            return articles_LoadArticlesError(state, action);
        default:
            return state;
    }
}

export default articleReducer

function articles_LoadArticlesLoading(state, action){
    return state;
}

function articles_LoadArticlesSuccess(state, action){
    var incoming = action.articles.payload
    //console.log(action.articles.payload)
    return incoming
}

function articles_LoadArticlesError(state, action){
    return state;
}