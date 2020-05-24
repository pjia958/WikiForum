import React from 'react'
import ArticleSummary from './articlesummary'

const ArticleList = ({articles}) => {
    return (
        <div className="article-list section">
                {articles && articles.map(article => {
                    return (
                        <ArticleSummary article={article} key={article.id} />
                    )
                })
            }
        </div>
    )
}

export default ArticleList