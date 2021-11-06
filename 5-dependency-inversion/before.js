// before.js
// 5. Dependency Inversion Principle

function main() {
  // https://momentjs.com/docs/#/parsing/string-format/ 
  const moment = require("moment");
  const now = new Date();
  return moment(now).format("mm.DD.yyyy");
}


function main2() {
  // https://date-fns.org/v2.25.0/docs/format
  const { format } = require("date-fns");
  const now = format(new Date(),'mm.dd.yyyy');  
  return now;
}

console.log("With moment: ", main());
console.log("With date-fns: ", main2())
