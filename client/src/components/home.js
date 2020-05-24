import React from 'react'
import ShowArticles from './showarticles'
import {connect} from 'react-redux'
// To show article lists
class Home extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        //console.log('check props from home:',this.props) :can get access
        const { articles } = this.props
        return(
            <div className="container">
                successfully render
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

export default connect(mapStateToProps)(Home)