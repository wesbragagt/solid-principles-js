// after.js
// 2 - Open Closed 

// What if we need to cancel the request?
// How can I add headers if I need?
const axios = require('axios').default
const cancelToken = axios.CancelToken;

function createRequest(endpoint){
  const url = `https://jsonplaceholder.typicode.com/${endpoint}`
  return async (configuration) => axios({url, ...configuration})
}

const getUsers = createRequest('users')
const getTodos = createRequest('todos')

getUsers().then(response => console.log(response.data))

getTodos({headers: {
  'x-api-key': 'foobar'
}}).then(response => console.log(response.data))





