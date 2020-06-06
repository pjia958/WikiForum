import React from 'react'

const ArticleSummary = ({article}) => {
    //console.log(article)
    return (
            <div className="card z-depth-0 article-summary">
            <div className="card-content grey-text text-darken-3">
    <span className="card-title">{article.title}</span>
                <p>Article id:{article._id}</p>
                <p>Posted by {article.firstName} {article.lastName}</p>
                <p className="grey-text">{article.date.substring(0, 10)}</p>
            </div>
        </div>
    )
}

export default ArticleSummary