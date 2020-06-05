import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticleList from './articles/articlelist'
import Home from './home'

class ShowArticles extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { article } = this.props
        return(
            <div>
                <ArticleList articles={article} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article
    }
}

export default connect(mapStateToProps)(ShowArticles)