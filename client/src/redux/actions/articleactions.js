export const createArticle = (article) => {
    return (dispatch, getState) => {
        // halting dispach, make async call to db
        dispatch({
            type : 'CREATE_ARTICLE',
            article : article
        })
    }
}