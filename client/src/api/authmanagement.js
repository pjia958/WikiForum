import config from '../config'

export var currentUser = {}

export function signUp(usersData){
  //console.log("signing up...", usersData)
  // return a promise
    return fetch(config.serverUrl+'/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          ...usersData
        }
      )
      }).then(
        res => {
          console.log(res.status)
          if(res.status === 200){
            alert('Successfully signed up, please log in.')
            window.location = "http://localhost:3000/login_page"
          } else {
            alert('Email has been registered, please try another one.')
            window.location = "http://localhost:3000/signup_page"
          }
        }
      )
}

export function logIn(usersData){
  console.log(usersData)
  return fetch(config.serverUrl+'/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(
      {
        ...usersData
      }
    )  }).then(
      res => {
        if(res.status === 200){
          alert('Successfully logged in!')
          window.location = "http://localhost:3000"
          return res.json()
        } else {
          alert('Wrong Email or password, please try agian.')
          localStorage.setItem('ifLogged', 'N')
          window.location = "http://localhost:3000/login_page"
        }
      }
    ).then( res => {
      //console.log('the res is: ', res)//it worked!
      currentUser = res
      if (currentUser){
      localStorage.setItem('firstName', currentUser.firstName)
      localStorage.setItem('lastName', currentUser.lastName)
      localStorage.setItem('ifLogged', 'Y') //potential type issue
      }
    }
    );
}

export function logOut(usersData){
}