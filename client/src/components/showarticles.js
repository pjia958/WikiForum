import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from './articles/articlelist'

class ShowArticle extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <ArticleList />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.article.articles
    }
}

export default connect(mapStateToProps)(ShowArticle)