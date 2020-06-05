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
        //console.log('check props from home:',this.props.article) 
        const { article } = this.props
        //console.log(article)
        return(
            <div className="container">
                <div className="row">
                    <ShowArticles articles={article}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.article)
    return {
        article: state.article
    }
}

const mapDispatchToProps = {
    loadArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
