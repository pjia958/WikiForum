const initState = {
    articles: [
        {id: '1', title: 'Article 1', content:'1 nice little apple'},
        {id: '2', title: 'Article 2', content:'2 nice little apple'},
        {id: '3', title: 'Article 3', content:'3 nice little apple'}

    ]
}


const articleReducer = (state = initState, action) => {
    //manipulate the state
    return state
}

export default articleReducer