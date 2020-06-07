import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import SelectionHighlighter from "react-highlight-selection";
import '../../assets/scss/base.scss'
import {updateArticle} from '../../api/article'

let selectedText

const ArticleDetails = (props) => {
    const id = props.match.params.id;
    const {article} = props
    console.log(props)

    function selectionHandler(selection) {
        //do something with selection
        selectedText = selection.selection
        console.log(selection.selection);
      }

    function handleChange(){
        let selectedpart = document.getElementById('htmlContent').innerText
        //console.log(selectedpart);
    }

    function handleSubmit(e){
        e.preventDefault();
        let selectedpart = document.getElementById('htmlContent').innerHTML
        console.log(selectedText)
        //console.log('the article is(from createarti com): ',this.state)
        //console.log({"htmlContent" : selectedpart, "_id" : article._id}); 
        if (localStorage.getItem('firstName') === article.firstName && localStorage.getItem('lastName') === article.lastName) {
            updateArticle({"htmlContent" : selectedpart, "_id" : article._id, "selectedText": selectedText})
        }   else {
            alert('You can\'t update the text, try log in your own account.')
            window.location = "http://localhost:3000/"
        }
    }

    function handleClick(){
        var ele = document.getElementById("htmlContent");  
        if (!ele.innerHTML) {
            var doc = new DOMParser().parseFromString(article.htmlContent, "text/xml");
            ele.appendChild(doc.documentElement)
        } else {
            alert("The auther highlighted: \n" + article.selectedText);   
            //console.log(article.selectedText);        
        }

    }

    if(article){
        console.log(!article.htmlContent);
        if (article.htmlContent){
            //page with highlight            
            //document.getElementById("htmlContent").appendChild(doc)
                    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <form onSubmit={handleSubmit}>
                <div className="card-content">
                <span className="card-title" onClick={handleClick}>{article.title}</span>
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

