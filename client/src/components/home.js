import React from 'react'
import {connect} from 'react-redux'

import ShowArticles from './showarticles'

import {loadArticles} from '../redux/actions/thunks'

// To show article lists
class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.loadArticles();
    }

    render() {
        //console.log('check props from home:',this.props) :can get access
        console.log(this.props)

        const { articles } = this.props
        return(
            <div className="container">
                <div className="row">
                    <ShowArticles articles={articles}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        article: state.article.articles
    }
}

const mapDispatchToProps = {
    loadArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)