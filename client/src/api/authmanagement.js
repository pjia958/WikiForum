import config from '../config'
import {} from '../'
// email : '',
// password : '',
// firstName : '',
// lastName : ''

export function signUp(usersData){
  console.log("signing up...", usersData)
  // return a promise
    return fetch(config.serverUrl+'/api/auth/signup', {
        method: 'post',
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
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify(
      {
        ...usersData
      }
    )  });
}