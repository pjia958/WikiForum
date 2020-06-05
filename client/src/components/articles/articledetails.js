import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

const ArticleDetails = (props) => {
    const id = props.match.params.id;
    const {article} = props
    console.log(props)

    if(article){
        return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <span className="card-title">{article.title}</span>
                <p>{article.content}</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Post by Alice</div>
                    <div>{article.date.substring(0, 10)}</div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading articles...</p>
            </div>
            )
    }
}

const mapStateToProps = (state, ownPorps) => {
    const id = ownPorps.match.params.id;
    const articles = state.article
    console.log(articles)
    console.log('targetid:'+id)
    // console.log(articles[0]._id)

    // const thisArticle = articles ? articles._id : null
    for (var i = 0; i < articles.length; i++) {
        if(id === articles[i]._id){
            return {
                article: articles[i]
            }
        }
    }
    
}

export default connect(mapStateToProps)(ArticleDetails)

