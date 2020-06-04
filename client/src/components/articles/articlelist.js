import React from 'react'
import ArticleSummary from './articlesummary'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
    return (
        <div className="article-list section">
                {articles && articles.map(article => {
                    return (
                    <Link to={'/article/' + article.id}>
                        <ArticleSummary article={article} key={article.id} />
                    </Link>
                    )
                })
            }
        </div>
    )
}

export default ArticleList