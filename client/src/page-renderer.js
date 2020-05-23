import React from 'react'
import {useRouteMatch} from 'react-router-dom'

const generatePage = function(page){
    const component = () => require(`./pages/${page}`).default
    // exception handleling : no certain page
    try {        
        //call hook method to go-on
        return React.createElement(component())// create <component/>
    } catch(error) {
        console.warn(error)
        return React.createElement(()=>'404')
    }
}

export default function PageRenderer(){
    //page routing and render
    const {
        params : { page }
    } = useRouteMatch()

    // click on the navbar and this func is called to generate pages
    return generatePage(page)
}