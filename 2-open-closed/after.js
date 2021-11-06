// after.js
// 2 - Open Closed 

// How can I add headers if I need?
const axios = require('axios').default

// createRequest can always be extended to call different baseUrls and pathnames
function createRequest({pathname,   baseUrl = 'https://jsonplaceholder.typicode.com' }){
  const url = `${baseUrl}/${pathname}`
  return async (configuration) => axios({url, ...configuration})
}

const getUsers = createRequest({pathname: 'users'})
const getTodos = createRequest({pathname: 'todos'})

getUsers().then(response => console.log(response.data))
getTodos({headers: {
  'x-api-key': 'foobar'
}}).then(response => console.log(response.data))





