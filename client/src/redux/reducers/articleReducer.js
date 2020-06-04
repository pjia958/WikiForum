import {getAllArticle} from '../../api/article'
import { LOAD_ARTICLES_LOADING, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR } from '../actions/action-types';


const initState = 
{
    articles: [
    //     {id: '1', title: 'Article 1 from reducer', content:'1 nice little apple'},
    //     {id: '2', title: 'Article 2 from reducer', content:'2 nice little apple'},
    //     {id: '3', title: 'Article 3 from reducer', content:'3 nice little apple'},
    ]

}

const articleReducer = (state = [], action) => {
    //manipulate the state
    switch(action.type) {
        case 'CREATE_ARTICLE':
            //console.log('create article', action.article)
            return state;
        case 'CREATE_ARTICLE_ERROR':
            //console.log('create article error', action.error)
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
    var incoming = action.payload
    return incoming
}

function articles_LoadArticlesError(state, action){
    return state;
}