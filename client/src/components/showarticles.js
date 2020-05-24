import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from './articles/articlelist'
import Home from './home'

class ShowArticles extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { articles } = this.props
        return(
            <div>
                <ArticleList articles={articles} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.article.articles
    }
}

export default connect(mapStateToProps)(ShowArticles)