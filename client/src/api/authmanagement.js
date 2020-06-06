import config from '../config'

export function signUp(usersData){
  console.log("signing up...", usersData)
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
      })
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
        } else {
          alert('Wrong Email or password, please try agian.')
          window.location = "http://localhost:3000/login_page"

        }
      }
    );
}