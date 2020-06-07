import React from 'react'
import ReactDOM from 'react-dom'
import CreateArticlePage from '../pages/createarticle_page'
import isTSAnyKeyword from '@babel/types'
import CreateArticle from '../components/articles/createarticle'

it("rendered well", ()=>{
    const div = document.createElement("div")
    ReactDOM.render(<CreateArticlePage />, div)
})