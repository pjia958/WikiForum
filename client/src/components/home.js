import React, {Component} from 'react'
import ShowArticle from './showarticles'
// To show article lists
class Home extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <ShowArticle />
                </div>
            </div>
        )
    }
}

export default Home