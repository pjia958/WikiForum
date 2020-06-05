import config from '../config'


// email : '',
// password : '',
// firstName : '',
// lastName : ''


export function signUp(usersData){
  console.log("signing up..."+ usersData)
  
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
      });
}

export function logIn(usersData){
  return fetch('http://localhost:10001/api/login', {
    method: 'post',
    body: usersData
  });
}