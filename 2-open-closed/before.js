// before.js
// 2 - Open Closed 
const axios = require('axios').default

async function getUsers(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response
}

getUsers().then(console.log)
