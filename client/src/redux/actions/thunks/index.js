import { loadArticlesLoading, loadArticlesSuccess, loadArticlesError, loadEventsLoading, loadEventsSuccess, loadEventsError } from '../index';
import Api from '../../../api/index';

export function loadArticles() {
    return dispatch => {

        // First, dispatch the LOAD_ArticleS_LOADING action, allowing the rest of our app to detect when
        // we've started loading Articles.
        dispatch(loadArticlesLoading());

        // Now, start loading the Articles.
        Api.getAllArticle()
            .then(

                // If the todos were loaded successfully, dispatch the LOAD_TODOS_SUCCESS action allowing the todos to be added to the store
                articles => dispatch(loadArticlesSuccess(articles)),

                // If there was an error loading todos, dispatch the LOAD_TODOS_ERROR action providing details of the error
                error => dispatch(loadArticlesError(error.message || "Unexpected error!")));
    }
}