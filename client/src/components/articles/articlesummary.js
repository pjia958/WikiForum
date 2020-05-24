import React from 'react'

const ArticleSummary = ({article}) => {
    return (
            <div className="card z-depth-0 article-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{article.title}</span>
                <p>Posted by auser</p>
                <p className="grey-text">1st, Jan, 2021</p>
            </div>
        </div>
    )
}

export default ArticleSummary