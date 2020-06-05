import React from 'react'
import {connect} from 'react-redux'
import {createArticle} from '../../redux/actions/articleactions'
import FetchArticle from '../fetcharticle'

class CreateArticle extends React.Component {
    state = {
        title : '',
        content : ''
    }
    
    handleChange = (e) => {
        console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('the article is(from createarti com): ',this.state)
        this.props.createArticle(this.state)
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white" id="createarticleform">
                <h4>New Article</h4>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" style={{height: 500}} onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
                <FetchArticle />
                </form>
            </div>
        );
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createArticle: (article) => dispatch(createArticle(article))
    }
}

export default connect(null, mapDispatchToProps)(CreateArticle)