// before.js
// 2 - Open Closed 
const axios = require('axios').default

async function getUsers(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response
}
async function getUserIds(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users').map(user => user.id)
  return response
}
// Let's say i need user posts
// Violating open closed principle because I'm using the functionality for which i have available to extend into other functionality
async function getPosts(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response
}



getUsers().then(console.log)
