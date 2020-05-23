export function signUp(usersData){
  console.log("signing up...")
    return fetch('http://localhost:10001/api/signup', {
        method: 'POST',
        body: usersData
      });
}

export function logIn(usersData){
  return fetch('http://localhost:10001/api/login', {
    method: 'POST',
    body: usersData
  });
}