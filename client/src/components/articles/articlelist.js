import React from 'react'
import ArticleSummary from './articlesummary'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
    //console.log(articles)
    return (
        <div className="article-list section">
                {articles && articles.map(article => {
                    return (
                    <Link to={'/article/' + article._id}>
                        <ArticleSummary article={article} key={article._id} />
                    </Link>
                    )
                })
            }
        </div>
    )
}

export default ArticleList