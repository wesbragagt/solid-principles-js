// “Software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification” by Meyer, Bertrand
// Can we extend this module?
// Yes.
// But we have to change the source code.
// ???? Does it match the principle?

// We have an API for which our UI needs to consume in order to return a list of todos
// But all I want to show is a list of the todos description
import fetch from "node-fetch";


async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await res.json();
  return response.map(todo => todo.title)
}

getTodos().then(console.log)

// function showTitleList(todos = []) {
//   return todos.map((todo) => todo.title);
// }

// getTodos()
//   .then(showTitleList)
//   .then(console.log)

// function showTitleAndIdList(todos = []) {
//   return [todos.map((todo) => todo.title), todos.map((todo) => todo.id)];
// }

// getTodos()
//   .then(showTitleAndIdList)
//   .then(console.log)

// function responseSelector(objectList, properties = []) {
//   return properties.map((property) => {
//     return objectList.map((object) => object[property]);
//   });
// }

// getTodos().then((data) => responseSelector(data, ['id', 'title']))

/*
  * Creates a function for selecting properties
  * from an array of objects pull each property specified as their own array
  * build a list of ids, a list of titles*/
// function getResponseSelector(properties = []) {
//   return function from(objectList) {
//     return properties.map((property) => {
//       return objectList.map((object) => object[property]);
//     });
//   };
// }

// const selectTitleId = getResponseSelector(['title', 'id'])
// getTodos()
//   .then(selectTitleId)
//   .then(console.log);

