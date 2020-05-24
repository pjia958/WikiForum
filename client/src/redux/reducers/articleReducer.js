const initState = {
    articles: [
        {id: '1', title: 'Article 1 from reducer', content:'1 nice little apple'},
        {id: '2', title: 'Article 2 from reducer', content:'2 nice little apple'},
        {id: '3', title: 'Article 3 from reducer', content:'3 nice little apple'}

    ]
}


const articleReducer = (state = initState, action) => {
    //manipulate the state
    switch(action.type) {
        case 'CREATE_ARTICLE':
            console.log('create article', action.article)
    }
    return state
}

export default articleReducer