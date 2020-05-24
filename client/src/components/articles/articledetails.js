import React from 'react'

const ArticleDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id;

    return (
        <div className="container section article-details">
            <div className="card z-depth-0">
                <div className="card-content">
                  <span className="card-title">Ariticle Tite id: {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem omnis tempore voluptate delectus, iure blanditiis, sit vitae consequuntur, possimus atque aliquid accusantium! Sint, illo quaerat nam omnis alias accusantium!</p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Post by Alice</div>
                    <div>1st, Jan, 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails
