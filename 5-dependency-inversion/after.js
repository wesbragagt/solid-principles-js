
// after.js
// 5. Dependency Inversion Principle

function getDateParser(parser){
  return (...args) => parser(...args)
}


function main() {
  // https://momentjs.com/docs/#/parsing/string-format/ 
  const moment = require('moment')
  const parseDate = getDateParser((date) => moment(date).format('MM/DD/YYYY'))
  return parseDate(new Date()) 
}

function main2() {
  // https://date-fns.org/v2.25.0/docs/format
  const {format: dateFnsFormat} = require('date-fns')
  const parseDate = getDateParser((date) => dateFnsFormat(date, 'MM/dd/yyyy'))
  return parseDate(new Date()) 
}

console.log("With moment: ", main());
console.log("With date-fns: ", main2())
