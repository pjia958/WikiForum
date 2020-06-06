import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import SelectionHighlighter from "react-highlight-selection";
import '../../assets/scss/base.scss'
import {updateArticle} from '../../api/article'
import jquery from 'jquery'

const ArticleDetails = (props) => {
    const id = props.match.params.id;
    const {article} = props
    console.log(props)

    function selectionHandler(selection) {
        //do something with selection
        console.log(selection);
      }

    function handleChange(){
        let selectedpart = document.getElementById('htmlContent').innerHTML
        //console.log(selectedpart);
    }

    function handleSubmit(e){
        e.preventDefault();
        let selectedpart = document.getElementById('htmlContent').innerHTML
        //console.log('the article is(from createarti com): ',this.state)
        //console.log({"htmlContent" : selectedpart, "_id" : article._id});    
        updateArticle({"htmlContent" : selectedpart, "_id" : article._id})
    }

    if(article){
        console.log(!article.htmlContent);
        if (article.htmlContent){
            //page with highlight
            var doc = new DOMParser().parseFromString(article.htmlContent, "text/xml");
            var ele = document.getElementById("htmlContent");
            console.log(ele);
            
            //document.getElementById("htmlContent").appendChild(doc)
                    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <form onSubmit={handleSubmit}>
                <div className="card-content">
                <span className="card-title">{article.title}</span>
                    <div id="htmlContent" onClick={handleChange}>
                    {/* <SelectionHighlighter
                        text={article.content}
                        selectionHandler={selectionHandler}
                        customClass="custom-class"
                    /> */}
                    </div>
                </div>
                {/* {document.getElementById("htmlContent").appendChild(doc)} */}
                <div className="card-action grey lighten-5 grey-text">
                <button className="btn pink lighten-1 z-depth-0">Restore</button>
                    <div>Post by {article.firstName} {article.lastName}</div>
                    <div>{article.date.substring(0, 10)}</div>
                </div>
                </form>
            </div>
            {console.log(document.getElementById("htmlContent"))}
        </div>
        
        )
        } else {
            //page without highlight
            return (
                <div className="container section article-details">
                    <div className="card z-depth-0">
                        <form onSubmit={handleSubmit}>
                        <div className="card-content">
                        <span className="card-title">{article.title}</span>
                        <div id="htmlContent" onClick={handleChange}>
                        <SelectionHighlighter
                            text={article.content}
                            selectionHandler={selectionHandler}
                            customClass="custom-class"
                        />
                        </div>
                        </div>
                        <div className="card-action grey lighten-5 grey-text">
                        <button className="btn pink lighten-1 z-depth-0">Update</button>
                            <div>Post by {article.firstName} {article.lastName}</div>
                            <div>{article.date.substring(0, 10)}</div>
                        </div>
                        </form>
                    </div>
                </div>
                )
        }

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
    // console.log(articles)
    // console.log('targetid:'+id)
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

