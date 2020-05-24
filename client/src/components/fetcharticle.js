import React ,{Component} from 'react'
import $ from 'jquery'

export default class FetchArticle extends Component{
    constructor(props){
        super()
        this.state = {}
    }
    
    // Consider: use hook method to execute ajax request to fetch full article content
    // Or use async fetch in serverside

    render(){
        function fetchArticle(){
            var searchTerm = document.getElementById('inputSearchTerm').value
            // console.log(searchTerm)
            
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&titles="+ searchTerm +"&redirects=true",
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Content-Type' : 'application/json'
            },
            method: 'GET',
            dataType: 'jsonp',
            data: '',
            success: function(data) {
                // this.setState({data: data});   // notice
                // console.log(data.query.pages)
                var dataNum = Object.keys(data.query.pages)[0]
                console.log(data.query.pages)
                if(dataNum == -1){
                    $('#articleData').empty()
                    $('#articleData').append(`<h1>Sorry, no such article titiled by: ${data.query.pages[dataNum].title}, please try to search in Wikipedia and paste the article titile here.</h1>`)
                }
                else {
                    $('#articleData').empty()
                    $('#articleData').append(`<h1>${data.query.pages[dataNum].title}</h1>`)
                    $('#articleData').append(data.query.pages[dataNum].extract)
                }
            },
            error: function(xhr, status, err) {
                console.error('article not found');
            }
        });
    }
        return(
            <div>
                <input className="input-field" type="text" placeholder="Enter a search term" id="inputSearchTerm"></input>
                <button className="btn pink lighten-1 z-depth-0" type="submit" id="fetch" onClick={()=>fetchArticle()}>Fectch </button>
                <div id="articleData"></div>
            </div>
        )
    }

}